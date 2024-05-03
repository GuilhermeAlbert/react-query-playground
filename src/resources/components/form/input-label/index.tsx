import { InputLabelOptions } from "./types";

export function InputLabel({
  title,
  inputName,
  isRequired,
  ...props
}: InputLabelOptions): JSX.Element {
  return (
    <>
      <label
        className="block text-sm font-medium mb-1"
        htmlFor={inputName}
        {...props}
      >
        {title} {isRequired && <span className="text-rose-500">*</span>}
      </label>
    </>
  );
}
