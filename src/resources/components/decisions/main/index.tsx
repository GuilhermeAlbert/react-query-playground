import BlankModal from "../../modals/blank";
import { MainDecisionProps } from "./types.js";

export function OutlinedSmallButton({ title, onClick }): JSX.Element {
  return (
    <button
      type="button"
      className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {title}
    </button>
  );
}

export function DangerSmallButton({ title, onClick }): JSX.Element {
  return (
    <button
      type="button"
      className="btn-sm bg-rose-500 hover:bg-rose-600 text-white"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {title}
    </button>
  );
}

export function SuccessSmallButton({ title, onClick }): JSX.Element {
  return (
    <button
      type="button"
      className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {title}
    </button>
  );
}

export function MainDecision({
  id,
  icon,
  title,
  description,
  actions,
  modalOpen,
  setModalOpen,
}: MainDecisionProps) {
  return (
    <BlankModal id={id} modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="p-5 flex space-x-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-100 dark:bg-emerald-400/30">
          {icon}
        </div>

        <div>
          <div className="mb-2">
            <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {title}
            </div>
          </div>

          {description && (
            <div className="text-sm mb-10">
              <div className="space-y-2">
                <p>{description}</p>
              </div>
            </div>
          )}

          {actions && <div className="flex flex-wrap space-x-2">{actions}</div>}
        </div>
      </div>
    </BlankModal>
  );
}
