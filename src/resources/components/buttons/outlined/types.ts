import { ButtonHTMLAttributes } from "react";

export interface OutlinedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  additionalClassName?: string;
  isLoading?: boolean;
  startIcon?: JSX.Element;
}
