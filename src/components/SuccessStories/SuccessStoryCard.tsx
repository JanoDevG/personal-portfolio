// src/components/SuccessStories/SuccessStoryCard.tsx
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
  icon?: React.ReactNode;
};

export const SuccessStoryCard: React.FC<SuccessStoryProps> = ({
  title,
  context,
  tags,
  challenge,
  solution,
  impact,
  icon,
}) => {
  const [open, setOpen] = React.useState(false);

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
              <div>
                <p className="font-mono text-xs uppercase text-accent/80">
                  Desafío
                </p>
                <p className="mt-1 leading-snug">{challenge}</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase text-accent/80">
                  Enfoque
                </p>
                <p className="mt-1 leading-snug">{solution}</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase text-accent/80">
                  Impacto
                </p>
                <p className="mt-1 leading-snug">{impact}</p>
              </div>
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
};
