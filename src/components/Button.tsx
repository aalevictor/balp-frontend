import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp className={clsx(
            'py-3 px-6 bg-blue-1 rounded text-blue-3 font-semibold text-sm leading-4 w-full transition-opacity outline-none hover:opacity-80 focus:ring-2 ring-offwhite'
        )}>{ children }</Comp>
    )
}