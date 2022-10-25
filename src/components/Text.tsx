import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    children?: ReactNode;
    size?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
    asChild?: boolean;
    className?: string;
}

export function Text({ size = 'text-md', children='Text', asChild=false, className }: TextProps) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp className={clsx(
            'font-sans',
            size,
            className
        )}>{ children }</Comp>
    )
}