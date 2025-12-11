import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Alejandro Gutiérrez - Senior Backend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0f1f, #09192f, #0b203a)",
          padding: "40px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#18f2e5",
            marginBottom: 20,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          ALEJANDRO GUTIÉRREZ
        </div>

        <div style={{ fontSize: 32, color: "#cce7ff", marginBottom: 20 }}>
          Senior Backend Engineer · Java · Spring WebFlux
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#a8c7dd",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Building resilient, reactive, high-demand systems for mission-critical
          platforms.
        </div>
      </div>
    ),
    size
  );
}
