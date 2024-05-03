import { addDays, differenceInDays, format, parseISO } from "date-fns";

export function formatAndParseISO(date?: string): string | undefined {
  let formattedDate: string | undefined;

  if (date) {
    formattedDate = format(parseISO(date), "yyyy-MM-dd");
  }

  return formattedDate;
}

export function addMoreDays(date: string, days: number): string {
  let dateUpdated: string = "";

  if (date) {
    const newDate = addDays(parseISO(date), days);
    dateUpdated = format(newDate, "yyyy-MM-dd");
  }

  return dateUpdated;
}

export function getDifferenceDays(date: string): number {
  let difference: number = 0;

  if (date) {
    difference = differenceInDays(parseISO(date), new Date());
  }

  return difference;
}

export function formatPtBrDate(dateStr: string): string {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString("pt-BR");

  return formattedDate;
}

export function formatDescriptively(
  dateStr?: string | number
): string | undefined {
  if (dateStr !== undefined && dateStr !== null) {
    let givenDate;

    if (typeof dateStr === "number") {
      givenDate = new Date(dateStr * 1000);
    } else {
      const isoDateStr = new Date(dateStr).toISOString();
      givenDate = parseISO(isoDateStr);
    }

    if (Number.isNaN(givenDate.getTime())) {
      return undefined;
    }

    const now = new Date();
    const diffDays = differenceInDays(now, givenDate);

    if (diffDays === 0) {
      return "Hoje";
    }

    if (diffDays === 1) {
      return "Há 1 dia";
    }

    if (diffDays <= 7) {
      return `Há ${diffDays} dias`;
    }

    return format(givenDate, "dd/MM/yyyy");
  }

  return undefined;
}
