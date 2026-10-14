import { ImageResponse } from "next/og";
import { site } from "@/content/portfolio";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: title large, site name small, on brand paper. */
export function renderOg(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#18211d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#2f45e0" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 112, letterSpacing: -4, lineHeight: 1 }}>{title}</div>
          <div style={{ fontSize: 32, color: "#56615a", maxWidth: 900 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
