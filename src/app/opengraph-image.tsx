import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: "80px",
          background: "#f1effa",
          color: "#1a1523",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "#5a2fae" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 30, color: "#4a4356" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
