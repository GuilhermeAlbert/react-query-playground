import { OutlinedButtonProps } from "./types";

export const OUTLINED_BUTTON_CLASS_NAMES =
  "disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none";

export function OutlinedButtonLoading({ title }) {
  return (
    <>
      <svg
        className="animate-spin w-4 h-4 fill-current shrink-0"
        viewBox="0 0 16 16"
      >
        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
      </svg>

      <span className="ml-2">{title}</span>
    </>
  );
}

export function OutlinedButton({
  title,
  isLoading,
  startIcon,
  additionalClassName,
  ...props
}: OutlinedButtonProps): JSX.Element {
  return (
    <button
      className={`btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300 ${OUTLINED_BUTTON_CLASS_NAMES} ${additionalClassName}`}
      {...props}
    >
      {isLoading ? (
        <OutlinedButtonLoading title={"Enviando..."} />
      ) : (
        <>
          {startIcon && <span className="mr-2">{startIcon}</span>}

          <span>{title}</span>
        </>
      )}
    </button>
  );
}
