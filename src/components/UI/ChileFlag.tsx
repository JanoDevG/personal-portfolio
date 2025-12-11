// src/components/Hero/ChileFlag.tsx
"use client";

type ChileFlagProps = {
  /** Alto aproximado en px, el ancho se calcula en proporción */
  size?: number;
};

const ChileFlag = ({ size = 28 }: ChileFlagProps) => {
  // Relación aproximada de la bandera: 3:2 (ancho:alto)
  const width = size * 1.5;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 3 2"
      aria-hidden="true"
      className="block"
    >
      {/* Clip con esquinas redondeadas para TODOS los colores */}
      <defs>
        <clipPath id="chile-flag-rounded">
          <rect x="0" y="0" width="3" height="2" rx="0.3" ry="0.3" />
        </clipPath>
      </defs>

      <g clipPath="url(#chile-flag-rounded)">
        {/* Franja superior blanca */}
        <rect x="0" y="0" width="3" height="1" fill="#ffffff" />

        {/* Franja inferior roja */}
        <rect x="0" y="1" width="3" height="1" fill="#D52B1E" />

        {/* Rectángulo azul (cuadrante superior izquierdo) */}
        <rect x="0" y="0" width="1.2" height="1" fill="#0039A6" />

        {/* Estrella blanca centrada en el azul */}
        <polygon
          fill="#ffffff"
          points="
            0.6,0.20
            0.66,0.40
            0.88,0.40
            0.70,0.52
            0.76,0.72
            0.6,0.60
            0.44,0.72
            0.50,0.52
            0.32,0.40
            0.54,0.40
          "
        />
      </g>
    </svg>
  );
};

export default ChileFlag;
