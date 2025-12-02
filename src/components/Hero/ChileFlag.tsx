// src/components/UI/ChileFlag.tsx
import type { HTMLAttributes } from "react";

interface ChileFlagProps extends HTMLAttributes<HTMLDivElement> {
  size?: number; // alto en px, el ancho se calcula proporcional
}

const ChileFlag = ({ size = 28, className = "", ...rest }: ChileFlagProps) => {
  // proporción aproximada 3:2 (ancho:alto)
  const height = size;
  const width = Math.round(size * 1.5);

  return (
    <div
      className={`inline-flex items-center justify-center rounded-md bg-transparent ${className}`}
      style={{ width, height }}
      {...rest}
    >
      <svg
        viewBox="0 0 3 2"
        width={width}
        height={height}
        className="rounded-md"
        aria-label="Chile"
      >
        {/* fondo blanco */}
        <rect width="3" height="2" fill="#ffffff" />
        {/* franja inferior roja */}
        <rect y="1" width="3" height="1" fill="#D52B1E" />
        {/* cuadrado azul con estrella */}
        <rect width="1" height="1" fill="#0039A6" />
        <polygon
          points="0.5,0.18 0.57,0.38 0.79,0.38 0.61,0.50 0.68,0.70 0.5,0.58 0.32,0.70 0.39,0.50 0.21,0.38 0.43,0.38"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default ChileFlag;
