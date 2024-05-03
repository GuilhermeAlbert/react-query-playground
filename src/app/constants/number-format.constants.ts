import { NumericFormatProps } from "react-number-format";
import { CurrencySymbols } from "../enums/currency.enum";

export type DefaultNumberFormatOptions = NumericFormatProps;

export const DefaultNumberFormatProps: DefaultNumberFormatOptions = {
  displayType: "text",
  thousandSeparator: ".",
  decimalSeparator: ",",
  decimalScale: 2,
  fixedDecimalScale: true,
  prefix: `${CurrencySymbols.Real} `,
};
