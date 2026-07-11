import { ImgHTMLAttributes } from 'react';

interface CardImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  avifSrc: string;
  webpSrc: string;
  alt: string;
}

/**
 * Serves card artwork as AVIF first, falling back to WebP, then to a plain
 * <img> pointed at the WebP file for browsers that don't support <picture>.
 * AVIF files are expected to sit beside the existing .webp files under
 * /public/cards using the same filename (e.g. "The Fool.avif").
 */
export function CardImage({
  avifSrc,
  webpSrc,
  alt,
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}: CardImageProps): JSX.Element {
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img src={webpSrc} alt={alt} loading={loading} decoding={decoding} {...imgProps} />
    </picture>
  );
}
