import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export interface InputLabelOptions
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  title: string;
  inputName?: string;
  isRequired?: boolean;
}
