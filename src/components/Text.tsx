import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    color?: string;
    children?: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    family?: 'normal' | 'semibold' | 'bold' | 'extrabold' | 'black';
    underline?: boolean;
    asChild?: boolean;
}

export function Text({ size = 'md', color='offwhite', children='Text', family='normal', asChild=false, underline=false }: TextProps) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp className={clsx(
            'font-sans',
            'text-' + size,
            underline ? 'underline' : '',
            'text-' + color,
            'font-' + family,
        )}>{ children }</Comp>
    )
}