interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
}

/**
 * ParticleField encapsulates the ambient canvas particle animation.
 * It owns its own animation frame lifecycle so React components only
 * need to mount a canvas element and call start / stop.
 */
export class ParticleField {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;
  private particles: Particle[] = [];
  private frameId: number | null = null;
  private readonly particleCount: number;

  constructor(canvas: HTMLCanvasElement, particleCount = 60) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context is not available.');
    this.ctx = ctx;
    this.particleCount = particleCount;
    this.resize();
    this.seed();
  }

  public resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private seed(): void {
    this.particles = Array.from({ length: this.particleCount }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '200,168,75' : '180,79,255'
    }));
  }

  private step = (): void => {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();
    }
    this.frameId = requestAnimationFrame(this.step);
  };

  public start(): void {
    if (this.frameId !== null) return;
    this.frameId = requestAnimationFrame(this.step);
  }

  public stop(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }
}
