import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const c = { ink: "#0b0d0f", line: "#292f35", fg: "#f2f2ee", muted: "#92999f", accent: "#c5f36b" };

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
          background: c.ink,
          color: c.fg,
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "flex-end", fontSize: 44, letterSpacing: -2 }}>
            MH
            <div style={{ width: 9, height: 9, background: c.accent, marginLeft: 3, marginBottom: 10 }} />
          </div>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 3, textTransform: "uppercase", color: c.muted }}>
            {profile.title} · {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, lineHeight: 1.02, letterSpacing: -3.5 }}>
          <span>{profile.headline[0]}</span>
          <span style={{ color: c.muted }}>{profile.headline[1]}</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${c.line}`,
            paddingTop: 24,
            fontSize: 22,
            color: c.muted,
          }}
        >
          <span style={{ color: c.fg }}>{profile.name}</span>
          <span>Angular · TypeScript · Node.js · WordPress</span>
          <span style={{ color: c.accent }}>{profile.domain}</span>
        </div>
      </div>
    ),
    size,
  );
}
