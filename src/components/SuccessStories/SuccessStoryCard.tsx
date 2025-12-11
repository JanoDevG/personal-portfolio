"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { IconChevronDown, IconCrown } from "@tabler/icons-react";

import { getSuccessStoryTexts } from "@/i18n/successStories";
import { type Locale } from "@/i18n/messages";

type SuccessStoryProps = {
  locale: Locale;
  title: string;
  context: string;
  tags: readonly string[];                   // 🔥 FIX
  challenge: string;
  solution: string;
  impact: string;
  metrics?: readonly string[];               // 🔥 También readonly
  technicalSummary?: string;
  technicalHighlights?: readonly string[];   // 🔥 También readonly
  icon?: React.ReactNode;
  featured?: boolean;
};

export const SuccessStoryCard: React.FC<SuccessStoryProps> = ({
  locale,
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
  featured = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const [showTech, setShowTech] = React.useState(false);

  const t = getSuccessStoryTexts(locale).labels;

  const hasMetrics = metrics && metrics.length > 0;
  const hasTechnical =
    technicalSummary || (technicalHighlights && technicalHighlights.length > 0);

  React.useEffect(() => {
    if (!open) setShowTech(false);
  }, [open]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      {/* glow + partículas */}
      {featured && (
        <div
          className="pointer-events-none absolute -inset-[2px] -z-10 rounded-2xl opacity-80 blur-[1px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(250,204,21,0.35), transparent 55%), radial-gradient(circle at 80% 70%, rgba(253,224,71,0.28), transparent 55%)",
          }}
        />
      )}

      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className={`
          group w-full rounded-xl bg-secondary/90 p-5 transition-colors
          ${
            featured
              ? "border border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.45)]"
              : "border border-accent/20 hover:border-accent/60"
          }
        `}
      >
        <motion.div
          animate={featured && open ? { scale: 1.02, y: -2 } : { scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <CollapsibleTrigger className="flex w-full items-start gap-4 text-left focus:outline-none">
            {/* icono */}
            <div className="mt-1 text-accent">
              {featured ? (
                <motion.div
                  animate={{ rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <IconCrown className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.9)]" />
                </motion.div>
              ) : (
                icon
              )}
            </div>

            {/* header */}
            <div className="flex-1">
              {featured && (
                <p className="mb-1 inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-yellow-300">
                  <span className="h-[6px] w-[6px] rounded-full bg-yellow-400 animate-ping" />
                  {locale === "es" ? "Proyecto destacado" : "Featured project"}
                </p>
              )}

              <h3 className="text-base font-semibold text-primary-content">{title}</h3>

              <p className="mt-1 text-xs text-primary-content/70">{context}</p>

              {/* tags */}
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

            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1"
            >
              <IconChevronDown className="h-4 w-4 text-primary-content/70" />
            </motion.div>
          </CollapsibleTrigger>

          {/* contenido */}
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
                  {/* Texto destacado */}
                  {featured && (
                    <div className="rounded-lg border border-yellow-400/50 bg-yellow-500/10 p-3 text-xs leading-relaxed text-yellow-100">
                      {locale === "es" ? (
                        <>
                          Este proyecto representa el trabajo más ambicioso,
                          complejo y de mayor impacto en el que he participado
                          hasta ahora...
                        </>
                      ) : (
                        <>
                          This project represents the most ambitious, complex
                          and high-impact work I've been involved in...
                        </>
                      )}
                    </div>
                  )}

                  {/* desafío */}
                  <div>
                    <p className="font-mono text-xs uppercase text-accent/80">
                      {t.challenge}
                    </p>
                    <p className="mt-1 leading-snug">{challenge}</p>
                  </div>

                  {/* enfoque */}
                  <div>
                    <p className="font-mono text-xs uppercase text-accent/80">
                      {t.solution}
                    </p>
                    <p className="mt-1 leading-snug">{solution}</p>
                  </div>

                  {/* impacto */}
                  <div>
                    <p className="font-mono text-xs uppercase text-accent/80">
                      {t.impact}
                    </p>
                    <p className="mt-1 leading-snug">{impact}</p>
                  </div>

                  {/* métricas */}
                  {hasMetrics && (
                    <div className="pt-3 border-t border-primary-content/10">
                      <p className="font-mono text-xs uppercase text-accent/80">
                        {t.metrics}
                      </p>

                      <ul className="mt-1 space-y-1.5 text-sm leading-snug">
                        {metrics!.map((metric) => (
                          <li key={metric} className="flex gap-2 text-primary-content/80">
                            <span className="mt-1 h-[5px] w-[5px] rounded-full bg-accent" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* detalle técnico */}
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
                        <span>{t.technical}</span>
                        <motion.span
                          animate={{ rotate: showTech ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
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
        </motion.div>
      </Collapsible>
    </motion.div>
  );
};
