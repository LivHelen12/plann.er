import { X } from "lucide-react";

interface EmailTagProps {
  email: string;
  removeEmailFromInvites: (email: string) => void;
}

export function EmailTag({ email, removeEmailFromInvites }: EmailTagProps) {
  return (
    <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
      <span className="text-zinc-300">{email}</span>
      <button onClick={() => removeEmailFromInvites(email)} type="button">
        <X className="size-5 text-zinc-400" />
      </button>
    </div>
  )
}