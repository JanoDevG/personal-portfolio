"use client";

import React from "react";

type Alignment = "left" | "center" | "right";

type BentoGridProps = {
  children: React.ReactNode;
};

type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index?: number; // lo dejamos por compatibilidad aunque ya no lo usamos
  align?: Alignment;
};

export const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
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

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  align,
}) => {
  const isWide = className?.includes("col-span-2");

  let alignment: string;

  if (isWide) {
    // Las wide siempre centradas
    alignment = "text-center items-center";
  } else {
    switch (align) {
      case "right":
        alignment = "text-right items-end";
        break;
      case "center":
        alignment = "text-center items-center";
        break;
      case "left":
      default:
        alignment = "text-left items-start";
        break;
    }
  }

  return (
    <div
      className={`
        group relative row-span-1 rounded-xl border border-accent/20 
        bg-secondary p-5 transition-all duration-300 
        hover:border-accent/60 hover:shadow-lg hover:-translate-y-[2px]
        ${className ?? ""}
      `}
    >
      {!isWide && header && <div className="mb-2">{header}</div>}
      {isWide && header && <div className="mb-3 flex justify-center">{header}</div>}

      <div
        className={`
          flex flex-col gap-2 transition-all duration-300 
          group-hover:translate-x-[2px]
          ${alignment}
        `}
      >
        <div className={`flex gap-2 ${alignment}`}>
          {alignment.startsWith("text-right") ? (
            <>
              <h3 className="font-semibold text-primary-content text-lg">
                {title}
              </h3>
              {icon}
            </>
          ) : (
            <>
              {icon}
              <h3 className="font-semibold text-primary-content text-lg">
                {title}
              </h3>
            </>
          )}
        </div>

        <p className="text-sm text-primary-content/70 leading-snug max-w-[95%]">
          {description}
        </p>
      </div>
    </div>
  );
};
