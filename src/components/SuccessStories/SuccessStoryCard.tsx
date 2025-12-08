"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { IconChevronDown } from "@tabler/icons-react";

type SuccessStoryProps = {
  title: string;
  context: string;
  tags: string[];
  challenge: string;
  solution: string;
  impact: string;
  metrics?: string[]; // bullets de métricas / impacto cuantitativo
  technicalSummary?: string; // párrafo corto
  technicalHighlights?: string[]; // bullets técnicos
  icon?: React.ReactNode;
};

export const SuccessStoryCard: React.FC<SuccessStoryProps> = ({
  title,
  context,
  tags,
  challenge,
  solution,
  impact,
  metrics,
  technicalSummary,
  technicalHighlights,
  icon,
}) => {
  const [open, setOpen] = React.useState(false);
  const [showTech, setShowTech] = React.useState(false);

  const hasMetrics = metrics && metrics.length > 0;
  const hasTechnical =
    technicalSummary || (technicalHighlights && technicalHighlights.length > 0);

  // Si se cierra la card principal, ocultamos el detalle técnico
  React.useEffect(() => {
    if (!open) {
      setShowTech(false);
    }
  }, [open]);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="
        group w-full rounded-xl border border-accent/20 bg-secondary/90 p-5
        transition-colors hover:border-accent/60 
      "
    >
      {/* Header de la Card */}
      <CollapsibleTrigger
        className="
          flex w-full items-start gap-4 text-left
          focus:outline-none
        "
      >
        {/* Ícono */}
        <div className="mt-1 text-accent">{icon}</div>

        {/* Texto principal */}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-primary-content">
            {title}
          </h3>

          <p className="mt-1 text-xs text-primary-content/70">{context}</p>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full border border-accent/40 px-2 py-0.5 
                  text-[10px] uppercase tracking-wide text-accent/90
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Chevron con animación */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1"
        >
          <IconChevronDown className="h-4 w-4 text-primary-content/70" />
        </motion.div>
      </CollapsibleTrigger>

      {/* Contenido expandible */}
      <AnimatePresence initial={false}>
        {open && (
          <CollapsibleContent forceMount>
            <motion.div
              key="content"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="mt-4 space-y-3 text-sm text-primary-content/75"
            >
              {/* Desafío */}
              <div>
                <p className="font-mono text-xs uppercase text-accent/80">
                  Desafío
                </p>
                <p className="mt-1 leading-snug">{challenge}</p>
              </div>

              {/* Enfoque */}
              <div>
                <p className="font-mono text-xs uppercase text-accent/80">
                  Enfoque
                </p>
                <p className="mt-1 leading-snug">{solution}</p>
              </div>

              {/* Impacto (descriptivo) */}
              <div>
                <p className="font-mono text-xs uppercase text-accent/80">
                  Impacto
                </p>
                <p className="mt-1 leading-snug">{impact}</p>
              </div>

              {/* Métricas e impacto cuantitativo */}
              {hasMetrics && (
                <div className="pt-3 border-t border-primary-content/10">
                  <p className="font-mono text-xs uppercase text-accent/80">
                    Métricas e impacto logrado
                  </p>
                  <ul className="mt-1 space-y-1.5 text-sm leading-snug">
                    {metrics!.map((metric) => (
                      <li
                        key={metric}
                        className="flex gap-2 text-primary-content/80"
                      >
                        <span className="mt-1 h-[5px] w-[5px] rounded-full bg-accent" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sub-card de detalle técnico */}
              {hasTechnical && (
                <div className="mt-3 rounded-lg border border-accent/30 bg-secondary/80 px-3 py-2">
                  <button
                    type="button"
                    onClick={() => setShowTech((prev) => !prev)}
                    className="
                      flex w-full items-center justify-between
                      text-[11px] font-mono uppercase tracking-wide 
                      text-accent focus:outline-none
                    "
                  >
                    <span>Detalle técnico</span>
                    <motion.span
                      animate={{ rotate: showTech ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <IconChevronDown className="h-3 w-3" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {showTech && (
                      <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 space-y-2 text-xs md:text-sm text-primary-content/80"
                      >
                        {technicalSummary && (
                          <p className="leading-snug">{technicalSummary}</p>
                        )}

                        {technicalHighlights && technicalHighlights.length > 0 && (
                          <ul className="mt-1 space-y-1.5 list-disc list-inside">
                            {technicalHighlights.map((item) => (
                              <li key={item} className="leading-snug">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
};
