import logo from '../assets/logo1.png'
import { ReactNode } from "react";
import { clsx } from 'clsx'
import { User } from 'phosphor-react';

const url = 'https://sortitoutsi.b-cdn.net/uploads/megapacks/cutoutfaces/originals/2022.08/19382573.png'

export interface PlayerRootProps {
    children: ReactNode
}

export function PlayerRoot({ children }: PlayerRootProps) {
    return (
        <div className='bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 gap-8 w-[50%] max-w-[650px] min-w-fit mx-auto'>
            <img src='' className='w-[80%]' />
            { children }
        </div>
    )
}

PlayerRoot.displayName = 'Player.Root'

export interface PlayerHeaderProps {
    URI?: string;
    player: any;
}

export function PlayerHeader({ player, URI }: PlayerHeaderProps) {
    const content = (
        <div className='grid grid-rows-1 grid-cols-5 gap-16 max-lg:flex max-lg:flex-col max-lg:gap-1'>
            <PlayerImage URI={URI} />
            <div className='text-offwhite col-span-4 gap-1 flex-col flex max-lg:min-w-[90%] max-lg:mx-auto max-lg:col-auto'>
                <div className='font-semibold text-lg px-3'>{player.name} ({player.age} anos)</div>
                <div className='grid grid-rows-4 grid-cols-2 gap-1 max-lg:flex max-lg:flex-col'>
                    <PlayerAttribute value={player.birthDate} attrib='Nascimento' bg keep />
                    <PlayerAttribute value={player.contractEnd} attrib='Contrato' bg />
                    <PlayerAttribute value={player.nationality} attrib='Nacionalidade' />
                    <PlayerAttribute value={player.secondNationality} attrib='2a Nacionalidade' keep />
                    <PlayerAttribute value={player.club} attrib='Clube' bg keep />
                    <PlayerAttribute value={player.wage} attrib='Salário' bg />
                    <PlayerAttribute value={player.currentAbility} attrib='CA' />
                    <PlayerAttribute value={player.potentialAbility} attrib='PA' keep />
                </div>
            </div>
        </div>
    )
    
    return(content)
}

PlayerHeader.displayName = 'Player.Header'

export interface PlayerAttributeProps {
    attrib?: string;
    value: string;
    bg?: boolean;
    keep?: boolean;
    color?: boolean;
}

export function PlayerAttribute({ attrib='', value, bg=false, keep=false, color }: PlayerAttributeProps) {
    var txColor = ''
    var error
    if (color) {
        try {
            var num = parseInt(value)
            if (num > 15)
                txColor = 'text-great'
            else if (num > 10)
                txColor = 'text-good'
            else if (num > 5)
                txColor = 'text-regular'
            else
                txColor = 'text-bad'
        } catch(err) {
            error = err
        }
    }
    return (
        <div className={clsx(
            'px-3 py-2 text-xs text-offwhite justify-between flex min-w-fit',
            bg ? 'rounded bg-grey-1' : 'rounded bg-transparent',
            keep ? '' : bg ? 'max-lg:bg-transparent' : 'max-lg:bg-grey-1'
        )}>
            {attrib != '' ? <span>{attrib}</span> : ''}
            <span className={clsx(
                color ? [txColor, 'font-semibold'] : ''
            )}>{value}</span>
        </div>
    )
}

PlayerAttribute.displayName = 'Player.Attribute'

export interface PlayerImageProps {
    URI?: string
}

export function PlayerImage({ URI }: PlayerImageProps) {
    if (URI){
        return (
            <div className='bg-grey-1 rounded w-[200px] h-[200px] mx-auto'>
                <img src={URI} className='w-[95%] mx-auto mt-[5%]' />
            </div>
        )
    } else {
        return (
            <div className='bg-grey-1 rounded w-[200px] h-fit mx-auto text-blue-3'>
                <User size='100%' weight='fill' className='w-[95%] mx-auto mt-[5%]' />
            </div>
        )
    }
}

PlayerImage.displayName = 'Player.Image'

export const Player = {
    Root: PlayerRoot,
    Image: PlayerImage,
    Header: PlayerHeader,
    Attribute: PlayerAttribute,
}