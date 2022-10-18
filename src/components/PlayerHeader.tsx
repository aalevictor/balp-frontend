import logo from '../assets/logo1.png'
import { ReactNode } from "react";
import clsx from 'clsx';

const url = 'https://sortitoutsi.b-cdn.net/uploads/megapacks/cutoutfaces/originals/2022.08/19382573.png'

export interface PlayerHeaderRootProps {
    children: ReactNode
}

export function PlayerHeaderRoot({ children }: PlayerHeaderRootProps) {
    return (
        <div className='bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 gap-8 w-[50%] max-w-[650px] min-w-fit mx-auto'>
            <img src='' className='w-[80%]' />
            { children }
        </div>
    )
}

PlayerHeaderRoot.displayName = 'PlayerHeader.Root'

export interface PlayerHeaderImageProps {
    URI?: string
}

export function PlayerHeaderImage({ URI=url }: PlayerHeaderImageProps) {
    return (
        <div className='bg-grey-1 rounded w-[200px] h-[200px] mx-auto'>
            <img src={URI} className='w-[95%] mx-auto mt-[5%]' />
        </div>
    )
}

PlayerHeaderImage.displayName = 'PlayerHeader.Image'

export const PlayerHeader = {
    Root: PlayerHeaderRoot,
    Image: PlayerHeaderImage,
}