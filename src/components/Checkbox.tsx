import * as CheckboxR from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
    return (
        <CheckboxR.Root className='w-5 h-5 p-1 bg-offwhite rounded focus:ring-2 ring-blue-1 outline-none'>
            <CheckboxR.Indicator asChild>
                <Check weight='bold' className='h-3 w-3 text-blue-2' />
            </CheckboxR.Indicator>
        </CheckboxR.Root>
    )
}