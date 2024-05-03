import { ThemeActions } from "../enums/actions.enum";
import { ThemeReducerActionOptions, ThemeReducerOptions } from "../types";

export const themeReducer = (
  prevState: ThemeReducerOptions,
  action: ThemeReducerActionOptions
): ThemeReducerOptions => {
  switch (action.type) {
    case ThemeActions.ChangeTheme:
      return {
        ...prevState,
        theme: action.theme,
      };

    default:
      return prevState;
  }
};
