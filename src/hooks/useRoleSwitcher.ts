// src/hooks/useRoleSwitcher.ts
import { useEffect, useState } from "react";

interface UseRoleSwitcherOptions {
  roles: readonly string[];   // ⬅️ acepta readonly string[]
  intervalMs?: number;
}

export default function useRoleSwitcher({
  roles,
  intervalMs = 4000,
}: UseRoleSwitcherOptions): string {
  const [index, setIndex] = useState(0);

  // ⚠️ Convertimos a mutable para poder trabajar sin errores TS
  const mutableRoles = [...roles];

  useEffect(() => {
    if (mutableRoles.length === 0) return;

    setIndex(0);

    const id = setInterval(() => {
      setIndex((prev) => {
        if (mutableRoles.length === 0) return 0;
        return (prev + 1) % mutableRoles.length;
      });
    }, intervalMs);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutableRoles.join("|"), intervalMs]);
  // join evita recrear intervalos por cambios de referencia

  return mutableRoles[index] ?? mutableRoles[0] ?? "";
}
