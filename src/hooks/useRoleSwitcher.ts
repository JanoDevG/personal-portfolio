// src/hooks/useRoleSwitcher.ts
import { useEffect, useState } from "react";

interface UseRoleSwitcherOptions {
  roles: string[];
  /**
   * Intervalo en milisegundos para cambiar de rol.
   * Por defecto: 4000 ms (4 segundos).
   */
  intervalMs?: number;
}

/**
 * Hook para rotar entre distintos roles/títulos de forma automática.
 * Ejemplo de uso:
 *
 * const role = useRoleSwitcher({ roles: hero.roles, intervalMs: 4000 });
 */
export default function useRoleSwitcher({
  roles,
  intervalMs = 4000,
}: UseRoleSwitcherOptions): string {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    // Cuando cambian los roles, reiniciamos al primero
    setIndex(0);

    const id = setInterval(() => {
      setIndex((prev) => {
        if (roles.length === 0) return 0;
        return (prev + 1) % roles.length;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [roles, intervalMs]);

  if (!roles || roles.length === 0) return "";

  return roles[index] ?? roles[0];
}
