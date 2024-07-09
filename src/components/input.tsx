import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const inputVariants = tv({
  base: 'bg-transparent text-lg placeholder-zinc-400 outline-none',

  variants: {
    sizeVariant: {
      full: 'w-full',
      small: 'w-40'
    },
  },
  defaultVariants: {
    sizeVariant: 'full',
  }
});

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> { }

export function Input({ sizeVariant, ...props }: InputProps) {
  return (
    <input {...props} className={inputVariants({ sizeVariant })} />
  )
}