import React from 'react';

import { LocalizeThemes } from '@seolhun/localize-components-styled-types';

const drawCanvas = (canvasRef: HTMLCanvasElement | null) => {
  const canvas = canvasRef;
  if (typeof window === 'undefined') {
    return;
  }

  if (!canvas) {
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const ctx = canvas ? canvas.getContext('2d') : null;
  const rate = 60;
  const arc = 30;
  const size = 7;
  const speed = 20;
  const parts: any[] = [];
  const colors = Object.values(LocalizeThemes);
  const mouse: any = { x: 0, y: 0 };
  let time: number = 0;

  canvas.setAttribute('width', `${width}`);
  canvas.setAttribute('height', `${height}`);

  const MouseMove = (e: MouseEvent) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY - document.documentElement.scrollTop;
  };

  const createCircles = () => {
    for (let i = 0; i < arc; i += 1) {
      parts[i] = {
        x: Math.ceil(Math.random() * width),
        y: Math.ceil(Math.random() * height),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  };

  // const useDrawStar = (
  //   cx: number,
  //   cy: number,
  //   spikes: number,
  //   outerRadius: number,
  //   innerRadius: number,
  // ) => {
  //   if (!ctx) {
  //     return;
  //   }

  //   let rot = (Math.PI / 2) * 3;
  //   let x = cx;
  //   let y = cy;
  //   const step = Math.PI / spikes;

  //   ctx.strokeStyle = '#000';
  //   ctx.beginPath();
  //   ctx.moveTo(cx, cy - outerRadius);
  //   for (let i = 0; i < spikes; i+= 1) {
  //     x = cx + Math.cos(rot) * outerRadius;
  //     y = cy + Math.sin(rot) * outerRadius;
  //     ctx.lineTo(x, y);
  //     rot += step;

  //     x = cx + Math.cos(rot) * innerRadius;
  //     y = cy + Math.sin(rot) * innerRadius;
  //     ctx.lineTo(x, y);
  //     rot += step;
  //   }
  //   ctx.lineTo(cx, cy - outerRadius);
  //   ctx.closePath();
  //   ctx.lineWidth = 5;
  //   ctx.strokeStyle = 'blue';
  //   ctx.stroke();
  //   ctx.fillStyle = 'skyblue';
  //   ctx.fill();
  // };

  const DistanceBetween = (p1: any, p2: any) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const particles = () => {
    if (!ctx) {
      return;
    }
    canvas.addEventListener('mousemove', MouseMove, false);

    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < arc; i += 1) {
      const li = parts[i];
      let distanceFactor = DistanceBetween(mouse, parts[i]);
      // useDrawStar(75, 100, 3, 30, 15);
      // useDrawStar(75, 200, 5, 30, 15);
      distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;

      if (i % 2 === 0) {
        ctx.stroke();
      } else {
        ctx.fill();
      }

      li.x += li.toX * (time * 0.05);
      li.y += li.toY * (time * 0.05);
      if (li.x > width) {
        li.x = 0;
      }
      if (li.y > height) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = width;
      }
      if (li.y < 0) {
        li.y = height;
      }
    }
    if (time < speed) {
      time += 1;
    }
    setTimeout(particles, 1000 / rate);
  };

  createCircles();
  particles();
};

const useCanvas = (canvas?: HTMLCanvasElement) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(canvas || null);
  React.useEffect(() => {
    drawCanvas(canvasRef.current);
  }, []);

  return [canvasRef];
};

export { useCanvas };

export default useCanvas;
