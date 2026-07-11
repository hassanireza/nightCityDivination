/**
 * Domain model for a single Major Arcana card.
 *
 * ArcanaCard is an immutable value object built from raw seed data.
 * It exposes derived, presentation ready values (image path, display name,
 * orientation aware meaning) so components stay declarative and free of
 * business logic.
 */

export enum ArcanaPath {
  Light = 'light',
  Shadow = 'shadow',
  Power = 'power'
}

export enum CardOrientation {
  Upright = 'upright',
  Reversed = 'reversed'
}

export interface ArcanaCardSeed {
  id: number;
  name: string;
  roman: string;
  path: ArcanaPath;
  archetype: string;
  glow: string;
  oracle: string;
  upright: string;
  reversed: string;
  keywords: readonly string[];
}

export class ArcanaCard {
  public readonly id: number;
  public readonly name: string;
  public readonly roman: string;
  public readonly path: ArcanaPath;
  public readonly archetype: string;
  public readonly glow: string;
  public readonly oracle: string;
  public readonly upright: string;
  public readonly reversed: string;
  public readonly keywords: readonly string[];

  constructor(seed: ArcanaCardSeed) {
    this.id = seed.id;
    this.name = seed.name;
    this.roman = seed.roman;
    this.path = seed.path;
    this.archetype = seed.archetype;
    this.glow = seed.glow;
    this.oracle = seed.oracle;
    this.upright = seed.upright;
    this.reversed = seed.reversed;
    this.keywords = seed.keywords;
  }

  /** Path (no extension) relative to the public directory used for the card artwork. */
  private get imageBase(): string {
    return `${import.meta.env.BASE_URL}cards/${this.name}`;
  }

  /** Modern AVIF source. Falls back to WebP where AVIF isn't available/supported. */
  public get avifSrc(): string {
    return `${this.imageBase}.avif`;
  }

  /** WebP source, used as the fallback format and as the <img src> for older browsers. */
  public get webpSrc(): string {
    return `${this.imageBase}.webp`;
  }

  /** @deprecated kept for backward compatibility — prefer webpSrc/avifSrc via <CardImage>. */
  public get imageSrc(): string {
    return this.webpSrc;
  }

  public get displayName(): string {
    return this.name.toUpperCase();
  }

  /** Meaning text for the requested orientation. */
  public meaningFor(orientation: CardOrientation): string {
    return orientation === CardOrientation.Upright ? this.upright : this.reversed;
  }

  /** Human readable orientation label used in the reading panel. */
  public static orientationLabel(orientation: CardOrientation): string {
    return orientation === CardOrientation.Upright ? 'UPRIGHT' : 'REVERSED';
  }

  /** Simple case insensitive text match used by the search filter. */
  public matches(query: string): boolean {
    const needle = query.trim().toLowerCase();
    if (!needle) return true;
    return (
      this.name.toLowerCase().includes(needle) ||
      this.archetype.toLowerCase().includes(needle) ||
      this.keywords.some((k) => k.toLowerCase().includes(needle))
    );
  }

  public matchesPath(filter: ArcanaPath | 'all'): boolean {
    return filter === 'all' || this.path === filter;
  }
}
