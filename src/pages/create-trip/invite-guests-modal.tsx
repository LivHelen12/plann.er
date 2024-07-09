import { AtSign, Plus } from "lucide-react"
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { CloseModal } from "../../components/close-modal";
import { Divider } from "../../components/divider";
import { EmailTag } from "../../components/email-tag";
import { Input } from "../../components/input";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvites
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>

            <CloseModal onCloseModal={closeGuestsModal} />
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map(email => {
            return (
              <EmailTag
                email={email}
                removeEmailFromInvites={() => removeEmailFromInvites(email)}
              />
            )
          })}
        </div>

        <Divider />

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <Input
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
            />
          </div>

          <Button type="submit" variant="primary">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}