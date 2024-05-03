import { useContextSelector } from "use-context-selector";
import { ThemeContext } from "..";
import { ThemeContextOptions } from "../types";

export function useTheme() {
  const state = useContextSelector(
    ThemeContext,
    (theme: ThemeContextOptions) => theme.state
  );

  const changeTheme = useContextSelector(
    ThemeContext,
    (theme: ThemeContextOptions) => theme.changeTheme
  );

  return {
    state,
    changeTheme,
  };
}
