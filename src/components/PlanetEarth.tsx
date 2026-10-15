'use client';

import React, { useEffect, useRef } from 'react';
import { BASE_PATH, ASSETS_PREFIX } from '@/utils/constants';

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  varying vec2 v_uv;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_rot_offset;
  uniform sampler2D u_texture;
  uniform vec2 u_center;
  uniform float u_radius;

  #define PI 3.1415926535897932384626433832795

  mat3 rotateY(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat3(
      c, 0.0, s,
      0.0, 1.0, 0.0,
      -s, 0.0, c
    );
  }

  mat3 rotateX(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat3(
      1.0, 0.0, 0.0,
      0.0, c, -s,
      0.0, s, c
    );
  }

  mat3 rotateZ(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat3(
      c, -s, 0.0,
      s, c, 0.0,
      0.0, 0.0, 1.0
    );
  }

  void main() {
    // WebGL gl_FragCoord: (0, 0) at bottom-left
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 d = fragCoord - u_center;
    float dist = length(d);

    // Deep space black
    vec4 finalColor = vec4(0.0, 0.0, 0.0, 0.0);

    // Razor-sharp Electric Blue / Cyan atmosphere colors (matching ReUI CTA-14)
    vec3 atmoDeep   = vec3(0.03, 0.32, 0.92);  // Electric cobalt blue
    vec3 atmoCyan   = vec3(0.18, 0.72, 1.00);  // Brilliant cyan
    vec3 atmoWhite  = vec3(0.70, 0.94, 1.00);  // Incandescent white-cyan peak

    // Crescent illumination: sun arriving from upper-left towards planet center at bottom-right
    vec2 crescentDir = normalize(vec2(-0.75, 0.58));
    float sunAngle = dot(normalize(d), crescentDir);
    float crescentFactor = smoothstep(-0.25, 0.85, sunAngle);

    float distFromLimb = dist - u_radius;

    if (dist <= u_radius) {
      // 3D Sphere Surface
      float z = sqrt(max(0.0, u_radius * u_radius - d.x * d.x - d.y * d.y));
      vec3 normal = normalize(vec3(d.x, d.y, z));

      // Earth axial tilt (-23.4 deg)
      mat3 tilt = rotateZ(-0.36) * rotateX(0.20);
      
      // Continuous smooth majestic rotation with interactive offset
      float rotAngle = 2.15 + u_time * 0.042 + u_rot_offset;
      mat3 rot = rotateY(rotAngle);

      vec3 rotNormal = rot * tilt * normal;

      // Spherical UV coordinates
      float u = atan(rotNormal.x, rotNormal.z) / (2.0 * PI) + 0.5;
      float v = asin(clamp(rotNormal.y, -1.0, 1.0)) / PI + 0.5;

      vec4 texColor = texture2D(u_texture, vec2(fract(u), clamp(v, 0.002, 0.998)));

      // Extract ONLY golden night city lights (pure dark oceans without blue wash)
      vec3 raw = texColor.rgb;
      float lightVal = max(raw.r, max(raw.g * 0.9, raw.b * 0.35));
      float cityMask = smoothstep(0.06, 0.32, lightVal);

      // Warm golden/amber nocturnal city clusters (exact ReUI CTA-14 look)
      vec3 gold = vec3(1.45, 1.20, 0.55);
      vec3 cityLights = pow(vec3(lightVal), vec3(1.25)) * gold * cityMask * 4.5;

      // Dark night Earth surface
      vec3 surface = cityLights;

      // TIGHT, RAZOR-SHARP atmospheric rim glow along the limb (power 20.0 to prevent wash)
      float fresnel = 1.0 - normal.z;
      float innerRim = pow(fresnel, 20.0) * crescentFactor * 4.8;
      float innerPeak = pow(fresnel, 32.0) * crescentFactor * 3.2;

      vec3 atmoGlow = mix(atmoDeep, atmoCyan, clamp(innerRim, 0.0, 1.0));
      atmoGlow = mix(atmoGlow, atmoWhite, clamp(innerPeak, 0.0, 1.0));

      vec3 result = surface + atmoGlow * innerRim;

      // Clean anti-aliased edge
      float edgeAA = smoothstep(u_radius, u_radius - 1.2, dist);
      finalColor = vec4(result, edgeAA);
    } else {
      // Atmospheric haze scattering into deep space outside the limb (crisp 22px haze)
      if (distFromLimb < 22.0) {
        float outerHaze = exp(-distFromLimb * 0.32) * crescentFactor;
        float peakHaze = exp(-distFromLimb * 0.65) * crescentFactor;

        vec3 outerColor = mix(atmoDeep, atmoCyan, clamp(outerHaze * 1.5, 0.0, 1.0));
        outerColor = mix(outerColor, atmoWhite, clamp(peakHaze * 2.2, 0.0, 1.0));

        float alpha = outerHaze * smoothstep(22.0, 0.0, distFromLimb) * 0.95;
        finalColor = vec4(outerColor * alpha, alpha);
      }
    }

    gl_FragColor = finalColor;
  }
`;

export default function PlanetEarth() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext('webgl2', { alpha: true, antialias: true, premultipliedAlpha: false }) as WebGLRenderingContext | null) ||
      (canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false }) as WebGLRenderingContext | null);

    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragShader = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRotOffset = gl.getUniformLocation(program, 'u_rot_offset');
    const uCenter = gl.getUniformLocation(program, 'u_center');
    const uRadius = gl.getUniformLocation(program, 'u_radius');
    const uTexture = gl.getUniformLocation(program, 'u_texture');

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Initial 1x1 default texture
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 255])
    );

    const setupTexture = (source: HTMLImageElement | HTMLCanvasElement) => {
      try {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.generateMipmap(gl.TEXTURE_2D);
      } catch (e) {
        console.warn('Failed to upload texture to WebGL:', e);
      }
    };

    // Procedural starry city lights texture generator as an emergency fallback
    const createProceduralTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 1024;
      pCanvas.height = 512;
      const ctx = pCanvas.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = '#020612';
      ctx.fillRect(0, 0, 1024, 512);

      // Generate continental light clusters
      for (let i = 0; i < 2200; i++) {
        const x = Math.random() * 1024;
        const y = (0.2 + Math.random() * 0.6) * 512;
        const r = Math.random() * 2.2;
        ctx.fillStyle =
          Math.random() > 0.4
            ? 'rgba(255, 215, 110, 0.95)'
            : 'rgba(255, 245, 190, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      setupTexture(pCanvas);
    };

    // Candidate URLs for GitHub Pages, local dev, and custom domains
    const basePath = BASE_PATH || '';
    const candidates = [
      `${basePath}/assets/images/earth-night.jpg`,
      `${ASSETS_PREFIX}/assets/images/earth-night.jpg`,
      '/My-App/assets/images/earth-night.jpg',
      '/assets/images/earth-night.jpg',
      'https://karlekartier.github.io/My-App/assets/images/earth-night.jpg',
      `${basePath}/assets/images/earth_lights_nasa.jpg`,
      '/My-App/assets/images/earth_lights_nasa.jpg',
      '/assets/images/earth_lights_nasa.jpg',
    ].filter((v, i, a) => v && a.indexOf(v) === i);

    let candidateIdx = 0;
    const img = new Image();
    img.crossOrigin = 'anonymous';

    const tryNextCandidate = () => {
      if (candidateIdx < candidates.length) {
        const nextSrc = candidates[candidateIdx++];
        img.src = nextSrc;
      } else {
        createProceduralTexture();
      }
    };

    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        setupTexture(img);
      } else {
        tryNextCandidate();
      }
    };

    img.onerror = () => {
      tryNextCandidate();
    };

    tryNextCandidate();

    // Interactive pointer drag handling
    let isDragging = false;
    let startX = 0;
    let currentRotOffset = 0;
    let targetRotOffset = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      if (canvas) canvas.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      startX = e.clientX;
      targetRotOffset -= deltaX * 0.005;
    };

    const onPointerUp = () => {
      isDragging = false;
      if (canvas) canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    let animationFrameId: number;
    const startTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const render = (now: number) => {
      resize();

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      const width = canvas.width;
      const height = canvas.height;

      gl.uniform2f(uResolution, width, height);
      gl.uniform1f(uTime, (now - startTime) / 1000.0);

      // Smooth interpolation for interactive drag rotation
      currentRotOffset += (targetRotOffset - currentRotOffset) * 0.12;
      gl.uniform1f(uRotOffset, currentRotOffset);

      // Responsive Arc Geometry matching ReUI CTA-14:
      let centerX: number;
      let centerY: number;
      let radius: number;

      if (width >= 640) {
        centerX = width * 1.08;
        centerY = (height * height - 0.1172 * width * width) / (2.0 * height);
        radius = Math.hypot(0.43 * width, -centerY);
      } else {
        centerX = width * 1.15;
        centerY = -height * 0.35;
        radius = Math.max(width * 0.65, height * 0.75);
      }

      gl.uniform2f(uCenter, centerX, centerY);
      gl.uniform1f(uRadius, radius);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uTexture, 0);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
      gl.deleteTexture(texture);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-contain cursor-grab active:cursor-grabbing select-none"
      style={{ display: 'block', touchAction: 'none' }}
      aria-label="Interactive 3D spinning planet Earth with city lights"
      role="img"
    />
  );
}

