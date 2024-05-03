import { ThemeActions } from "./enums/actions.enum";
import { ThemeTypes } from "./enums/theme.type.enum";

export interface ThemeContextOptions {
  state: ThemeReducerOptions;
  changeTheme: (newTheme: ThemeTypes) => void;
}

export interface ThemeProviderOptions {
  children: JSX.Element | JSX.Element[];
}

export interface ThemeReducerOptions {
  theme: ThemeTypes;
}

export type ThemeReducerActionOptions = {
  type: ThemeActions.ChangeTheme;
  theme: ThemeTypes;
};
