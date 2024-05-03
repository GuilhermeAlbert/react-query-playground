import { ModalTypes } from "@/app/enums/modal-type.enum";
import { DangerSmallButton, MainDecision, OutlinedSmallButton } from "../main";
import { ChildrenMainDecisionProps } from "../main/types";

export function DangerDecision({ ...props }: ChildrenMainDecisionProps) {
  return (
    <MainDecision
      {...props}
      id={ModalTypes.Danger}
      icon={
        <svg
          className="w-4 h-4 shrink-0 fill-current text-rose-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
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
            <DangerSmallButton
              onClick={props.onConfirmClick}
              title={props.confirmTitle}
            />
          )}
        </>
      }
    />
  );
}
