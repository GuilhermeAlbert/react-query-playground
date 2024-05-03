import { PrimaryButtonProps } from "../buttons/primary/types";

export interface HeaderProps {
  title: string;
  endActions?: {
    buttonProps?: PrimaryButtonProps;
  };
}
