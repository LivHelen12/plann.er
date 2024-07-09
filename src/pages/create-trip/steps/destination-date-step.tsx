import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { VerticalDivider } from "../../../components/vertical-divider";
import { Input } from "../../../components/input";

export interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <Input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />

        <Input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando"
          sizeVariant="small"
        />
      </div>

      <VerticalDivider />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary" size="default">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) :
        <Button onClick={openGuestsInput} variant="primary" size="default">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      }
    </div>

  )
}