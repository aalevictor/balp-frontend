import logo from '../assets/logo2.png'
import { ReactNode } from "react";

export interface FormRootProps {
    children: ReactNode
}

export function FormRoot({ children }: FormRootProps) {
    return (
        <form>
            <div className='bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 gap-6 mx-auto my-auto h-fit w-fit'>
                { children }
            </div>
        </form>
    )
}

FormRoot.displayName = 'Form.Root'

export interface FormContentProps {
    children: ReactNode;
}

export function FormContent({ children }: FormContentProps) {
    return (
        <div className='bg-blue-2 rounded-lg flex flex-col justify-center items-center w-fit p-8 gap-4 border-solid border-8 border-blue-3'>
            <img src={logo} className="h-8 mb-4"/>
            { children }
        </div>
    )
}

FormContent.displayName = 'Form.Content'

export const Form = {
    Root: FormRoot,
    Content: FormContent,
}