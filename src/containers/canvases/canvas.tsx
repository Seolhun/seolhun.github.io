import { useEffect, useRef } from 'react';

type CanvasRef = HTMLCanvasElement | null;

const drawCanvas = (ref: CanvasRef) => {
  const canvas = ref || (document.getElementById('seolhun-canvas') as HTMLCanvasElement);
  if (!canvas) {
    return;
  }
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ctx = canvas ? canvas.getContext('2d') : null;
  const rate = 60;
  const arc = 100;
  let time: number = 0;
  const size = 7;
  const speed = 20;
  const parts: any[] = [];
  const colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
  const mouse: any = { x: 0, y: 0 };

  canvas.setAttribute('width', `${width}`);
  canvas.setAttribute('height', `${height}`);

  const create = () => {
    for (let i = 0; i < arc; i++) {
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

  const particles = () => {
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('mousemove', MouseMove, false);
    for (let i = 0; i < arc; i++) {
      const li = parts[i];
      let distanceFactor = DistanceBetween(mouse, parts[i]);
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

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

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
      time++;
    }
    setTimeout(particles, 1000 / rate);
  };

  const MouseMove = (e: MouseEvent) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY - document.documentElement.scrollTop;
  };

  const DistanceBetween = (p1: any, p2: any) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  create();
  particles();
};

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    drawCanvas(canvasRef.current);
    return () => {
      drawCanvas(canvasRef.current);
    };
  }, []);

  return [canvasRef];
};

export default useCanvas;
