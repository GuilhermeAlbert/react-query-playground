import { ModalTypes } from "@/app/enums/modal-type.enum";
import { MainDecision, OutlinedSmallButton, SuccessSmallButton } from "../main";
import { ChildrenMainDecisionProps } from "../main/types";

export function SuccessDecision({ ...props }: ChildrenMainDecisionProps) {
  return (
    <MainDecision
      {...props}
      id={ModalTypes.Success}
      icon={
        <svg
          className="w-4 h-4 shrink-0 fill-current text-emerald-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
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
