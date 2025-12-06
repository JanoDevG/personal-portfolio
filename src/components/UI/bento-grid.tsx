"use client";

import React from "react";

export const BentoGrid = ({ children }) => {
  return (
    <div
      className="
        grid grid-cols-1 
        md:grid-cols-3 
        gap-6 
        auto-rows-[auto]
      "
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index?: number;
}) => {
  // Detectar si esta tarjeta es ancha
  const isWide = className?.includes("col-span-2");

  // Calcular posición en la fila según su índice (solo si no es ancha)
  const col = index !== undefined ? index % 3 : 0;

  const alignment =
    isWide
      ? "text-center items-center"
      : col === 2
      ? "text-right items-end"
      : col === 0
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <div
      className={`
        group relative row-span-1 rounded-xl border border-accent/20 
        bg-secondary p-5 transition-all duration-300 
        hover:border-accent/60 hover:shadow-lg hover:-translate-y-[2px]
        ${className ?? ""}
      `}
    >
      {/* Skeleton solo si existe */}
      {!isWide && header && (
        <div className="mb-2">
          {header}
        </div>
      )}

      {/* Si es wide: dejamos el header centrado arriba */}
      {isWide && header && (
        <div className="mb-3 flex justify-center">
          {header}
        </div>
      )}

      {/* Contenido alineado dinámicamente */}
      <div
        className={`
          flex flex-col gap-2 transition-all duration-300 
          group-hover:translate-x-[2px]
          ${alignment}
        `}
      >
        {/* Ícono + título */}
        <div
          className={`
            flex gap-2
            ${alignment}
          `}
        >
          {/* Ícono al lado correcto */}
          {alignment === "text-right items-end" ? (
            <>
              <h3 className="font-semibold text-primary-content text-lg">{title}</h3>
              {icon}
            </>
          ) : (
            <>
              {icon}
              <h3 className="font-semibold text-primary-content text-lg">{title}</h3>
            </>
          )}
        </div>

        {/* Descripción */}
        <p className="text-sm text-primary-content/70 leading-snug max-w-[95%]">
          {description}
        </p>
      </div>
    </div>
  );
};

