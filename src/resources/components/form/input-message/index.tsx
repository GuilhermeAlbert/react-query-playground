import { InputMessageProps } from "./types";

export function InputMessage(props: InputMessageProps): JSX.Element {
  return (
    <>
      {"error" in props && props.error && (
        <div className="text-xs mt-1 text-rose-500">{props.error}</div>
      )}

      {"success" in props && props.success && (
        <div className="text-xs mt-1 text-emerald-500">{props.success}</div>
      )}
    </>
  );
}
