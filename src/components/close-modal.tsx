import { X } from "lucide-react";
import { ComponentProps } from "react"

interface CloseModalProps extends ComponentProps<'button'> {
  onCloseModal: () => void;
}

export function CloseModal({ onCloseModal }: CloseModalProps) {
  return (
    <button onClick={onCloseModal} type="button">
      <X className="size-4 text-zinc-400" />
    </button>
  )
}