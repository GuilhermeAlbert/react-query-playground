import { InputLabel } from "../../input-label";
import { InputMessage } from "../../input-message";
import { TextInputProps } from "./types";

export function TextInput({
  label,
  error,
  success,
  startIcon,
  ...props
}: TextInputProps): JSX.Element {
  return (
    <div>
      {label && !props.hidden && (
        <InputLabel
          title={label}
          inputName={props.name}
          isRequired={props.required}
        />
      )}

      <div className="relative">
        {startIcon && (
          <div className="absolute inset-0 right-auto flex items-center pointer-events-none shrink-0 ml-3 mr-2">
            {startIcon}
          </div>
        )}

        <input
          className={`
          ${!!startIcon && "pl-9"}
          form-input w-full disabled:bg-slate-50
          ${!!error && "border-rose-500"}
          ${!!success && "border-emerald-300"}
        `}
          {...props}
        />
      </div>

      {error && !props.hidden && <InputMessage error={error} />}
      {success && !props.hidden && <InputMessage success={success} />}
    </div>
  );
}
