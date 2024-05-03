import { PrimaryButton } from "../buttons/primary";
import { HeaderProps } from "./types";

export function Header({ title, endActions }: HeaderProps): JSX.Element {
  return (
    <div className="sm:flex sm:justify-between sm:items-center mb-8">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
          {title}
        </h1>
      </div>

      {endActions && (
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {endActions.buttonProps && (
            <PrimaryButton {...endActions.buttonProps} />
          )}
        </div>
      )}
    </div>
  );
}
