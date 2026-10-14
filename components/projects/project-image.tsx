import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & { src: string };

/** next/image wrapper; SVG placeholders bypass the optimizer. */
export function ProjectImage({ src, alt, ...props }: Props) {
  return <Image src={src} alt={alt} unoptimized={src.endsWith(".svg")} {...props} />;
}
