import currency from "currency.js";
import { FieldNames } from "../enums/field-name.enum";

const currencyConfig = {
  separator: "",
  decimal: ".",
  precision: 2,
  pattern: "#",
};

export function parseCurrency(value: any): number {
  if (typeof value === "number") return value;

  let numericString = String(value).replace(/[R$\s]/g, "");

  numericString = numericString.replace(",", ".").replace(/\.(?=\d{3})/g, "");

  const parsedNumber = parseFloat(numericString);

  if (!Number.isNaN(parsedNumber) && Number.isFinite(parsedNumber)) {
    return parsedNumber;
  }

  return currency(numericString, currencyConfig).value;
}

export function formatCurrencyAttributes(
  data: any,
  currencyFieldNames: FieldNames[]
): any {
  let response: any = {};

  currencyFieldNames.forEach((item) => {
    if (data[item] !== undefined && data[item] !== null) {
      response[item] = parseCurrency(data[item]);
    }
  });

  return response;
}
