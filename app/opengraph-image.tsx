import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
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
          justifyContent: "space-between",
          background: "#101010",
          color: "#f2f2ef",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #3a3a3a",
            paddingTop: 24,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#a3a3a0",
          }}
        >
          <span>{site.name}</span>
          <span>{site.role}</span>
          <span>hadamikmichal.pl</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, fontWeight: 700, lineHeight: 0.98, letterSpacing: -4 }}>
          <span>Building digital</span>
          <span style={{ display: "flex" }}>
            experiences that<span style={{ color: "#ff4f12", marginLeft: 26 }}>work.</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#a3a3a0" }}>
          <div style={{ width: 14, height: 14, background: "#ff4f12" }} />
          <span>Angular · TypeScript · Node.js · WordPress</span>
        </div>
      </div>
    ),
    size,
  );
}
