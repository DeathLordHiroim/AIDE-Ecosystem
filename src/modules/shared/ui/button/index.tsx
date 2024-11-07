import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "/home/runner/AIDE/new_src/modules/shared/utils/cn"
import { ButtonProps } from "./types"
import { buttonVariants } from "./variants"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }