export type InputMessageProps =
  | { error: string; success?: never }
  | { error?: never; success: string }
  | {};
