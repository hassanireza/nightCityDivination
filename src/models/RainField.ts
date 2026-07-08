export interface RainDropStyle {
  key: number;
  left: string;
  height: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

/**
 * RainField is a small factory that generates the falling rain drop
 * styling data used by the animated city backdrop. Kept as a static
 * class method so the generation rules live in one documented place.
 */
export class RainField {
  public static generate(count = 80): RainDropStyle[] {
    return Array.from({ length: count }, (_, i) => ({
      key: i,
      left: `${Math.random() * 100}%`,
      height: `${Math.random() * 60 + 20}px`,
      animationDuration: `${Math.random() * 1.5 + 0.8}s`,
      animationDelay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.4 + 0.1
    }));
  }
}
