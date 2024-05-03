import { ButtonHTMLAttributes } from "react";

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
  additionalClassName?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}
