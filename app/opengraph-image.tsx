import { site } from "@/content/portfolio";
import { ogSize, renderOg } from "@/lib/og";

export const alt = `${site.name} — ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg(site.name, site.role);
}
