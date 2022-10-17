import logo from '../assets/logo1.png'
import { ReactNode } from "react";

export interface FormRootProps {
    children: ReactNode
}

export function FormRoot({ children }: FormRootProps) {
    return (
        <div className='bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 gap-8 w-[50%] max-w-[650px] min-w-fit mx-auto'>
            <img src={logo} className='w-[80%]' />
            { children }
        </div>
    )
}

FormRoot.displayName = 'Form.Root'

export interface FormContentProps {
    children: ReactNode
}

export function FormContent({ children }: FormContentProps) {
    return (
        <div className='bg-blue-2 rounded-lg flex flex-col w-full justify-center items-center p-8 gap-8 border-solid border-8 border-blue-3'>
            { children }
        </div>
    )
}

FormContent.displayName = 'Form.Content'

export const Form = {
    Root: FormRoot,
    Content: FormContent,
}