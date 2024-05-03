import { StorageKeys } from "@/app/enums/storage.enum";
import { useEffect, useReducer } from "react";
import { createContext } from "use-context-selector";
import { ThemeActions } from "./enums/actions.enum";
import { ThemeTypes } from "./enums/theme.type.enum";
import { themeReducer } from "./reducers/theme.reducer";
import {
  ThemeContextOptions,
  ThemeProviderOptions,
  ThemeReducerOptions,
} from "./types";

export const ThemeContext = createContext<ThemeContextOptions>(
  {} as ThemeContextOptions
);

export default function ThemeProvider({ children }: ThemeProviderOptions) {
  const persistedTheme: string | null = localStorage.getItem(StorageKeys.Theme);

  const themeInitialState: ThemeReducerOptions = {
    theme: (persistedTheme as ThemeTypes | null) || ThemeTypes.Light,
  };

  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  const changeTheme = (newTheme: ThemeTypes): void => {
    dispatch({
      type: ThemeActions.ChangeTheme,
      theme: newTheme,
    });

    localStorage.setItem(StorageKeys.Theme, newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add("[&_*]:!transition-none");

    if (state.theme === ThemeTypes.Light) {
      document.documentElement.classList.remove(ThemeTypes.Dark);
      document.documentElement.style.colorScheme = ThemeTypes.Light;
    } else {
      document.documentElement.classList.add(ThemeTypes.Dark);
      document.documentElement.style.colorScheme = ThemeTypes.Dark;
    }

    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 1);

    return () => clearTimeout(transitionTimeout);
  }, [state.theme]);

  return (
    <ThemeContext.Provider
      value={{
        state,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
