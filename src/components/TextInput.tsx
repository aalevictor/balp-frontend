import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center h-14 gap-3 py-3 px-4 rounded w-full bg-offwhite focus-within:ring-2 ring-blue-1'>
            { props.children }
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-8 h-8 text-blue-2'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 text-blue-2 text-sm placeholder:text-grey-1 outline-none'
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}