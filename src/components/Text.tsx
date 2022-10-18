import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    color?: string;
    children?: ReactNode;
    size?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
    family?: 'font-normal' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
    underline?: boolean;
    asChild?: boolean;
}

export function Text({ size = 'text-md', color='text-offwhite', children='Text', family='font-normal', asChild=false, underline=false }: TextProps) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp className={clsx(
            'font-sans',
            size,
            underline ? 'underline' : '',
            color,
            family,
        )}>{ children }</Comp>
    )
}