import { ModalTypes } from "@/app/enums/modal-type.enum";

export interface MainDecisionProps {
  id: ModalTypes;
  modalOpen: boolean;
  setModalOpen: any;
  icon: JSX.Element;
  title: string;
  description?: string;

  actions?: JSX.Element;
}

export interface ChildrenMainDecisionProps
  extends Omit<MainDecisionProps, "id" | "icon"> {
  onCancelClick?(): void;
  onConfirmClick?(): void;
  cancelTitle?: string;
  confirmTitle?: string;
}
