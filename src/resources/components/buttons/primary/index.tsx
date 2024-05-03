import { Fetching } from "../../fetching";
import { PrimaryButtonProps } from "./types";

export const PRIMARY_BUTTON_CLASS_NAMES =
  "text-white disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none";

export const AddIcon = () => {
  return (
    <svg
      className="w-4 h-4 fill-current opacity-50 shrink-0"
      viewBox="0 0 16 16"
    >
      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
      <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
      <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
      <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
    </svg>
  );
};

export function RightArrow(): JSX.Element {
  return <span> -&gt;</span>;
}

export function PrimaryButton({
  title,
  isLoading,
  startIcon,
  endIcon,
  additionalClassName,
  ...props
}: PrimaryButtonProps): JSX.Element {
  return (
    <button
      className={`btn bg-[#50C878] hover:bg-[#3A7850] ${PRIMARY_BUTTON_CLASS_NAMES} ${additionalClassName}`}
      {...props}
    >
      {isLoading ? (
        <Fetching title={"Enviando..."} />
      ) : (
        <>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          <span>{title}</span>
          {endIcon}
        </>
      )}
    </button>
  );
}
