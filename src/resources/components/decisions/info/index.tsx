import { ModalTypes } from "@/app/enums/modal-type.enum";
import { MainDecision, OutlinedSmallButton, SuccessSmallButton } from "../main";
import { ChildrenMainDecisionProps } from "../main/types";

export function InfoDecision({ ...props }: ChildrenMainDecisionProps) {
  return (
    <MainDecision
      {...props}
      id={ModalTypes.Info}
      icon={
        <svg
          className="w-4 h-4 shrink-0 fill-current text-indigo-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        </svg>
      }
      actions={
        <>
          {props.onCancelClick && (
            <OutlinedSmallButton
              title={props.cancelTitle}
              onClick={props.onCancelClick}
            />
          )}

          {props.onConfirmClick && (
            <SuccessSmallButton
              onClick={props.onConfirmClick}
              title={props.confirmTitle}
            />
          )}
        </>
      }
    />
  );
}
