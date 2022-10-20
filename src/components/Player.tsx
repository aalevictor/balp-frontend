
import { ReactNode, useEffect, useState } from "react";
import { clsx } from 'clsx'
import { User } from 'phosphor-react';
import axios from 'axios';
import IconFlag from 'country-flag-icons/react/3x2'

const url = 'https://sortitoutsi.b-cdn.net/uploads/megapacks/cutoutfaces/originals/2022.08/19382573.png'

export interface PlayerRootProps {
    children: ReactNode
}

export function PlayerRoot({ children }: PlayerRootProps) {
    return (
        <div className='h-fit relative p-2 py-4 mx-auto w-[90%] max-w-[1024px] flex flex-col gap-4 my-auto'>
            { children }
        </div>
    )
}

PlayerRoot.displayName = 'Player.Root'

export interface PlayerContentProps {
    children: ReactNode
}

export function PlayerContent({ children }: PlayerContentProps) {
    return (
        <div className='grid grid-cols-5 gap-1 max-lg:flex max-lg:flex-col'>
            { children }
        </div>
    )
}

PlayerContent.displayName = 'Player.Content'
export interface PlayerHeaderProps {
    URI?: string;
    player: any;
}

export function PlayerHeader({ player, URI }: PlayerHeaderProps) {
    const [ countries, setCountries ] = useState([])
  
    useEffect(() => {
      axios('http://country.io/iso3.json').then(response => {
        console.log(response)
        setCountries(response.data)

        console.log(countries)
      })
    }, [])

    const content = (
        <div className='grid grid-rows-1 grid-cols-5 gap-16 max-lg:flex max-lg:flex-col max-lg:gap-1'>
            <PlayerImage URI={URI} />
            <div className='text-offwhite col-span-4 gap-1 flex-col flex'>
                <div className='font-semibold text-lg px-3 max-lg:my-3 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto max-lg:text-center'>{player.name} ({player.age} anos)</div>
                <div className='grid grid-rows-4 grid-cols-2 gap-1 max-lg:flex max-lg:flex-col max-lg:w-full'>
                    <PlayerAttribute value={player.birthDate} attrib='Nascimento' bg />
                    <PlayerAttribute value={player.contractEnd} attrib='Contrato' bg keep />
                    <PlayerAttribute value={player.nationality} attrib='Nacionalidade' keep />
                    <PlayerAttribute value={player.secondNationality} attrib='2a Nacionalidade' />
                    <PlayerAttribute value={player.club} attrib='Clube' bg />
                    <PlayerAttribute value={player.wage} attrib='Salário' bg keep />
                    <PlayerAttribute value={player.currentAbility} attrib='C. Atual (CA)' keep />
                    <PlayerAttribute value={player.potentialAbility} attrib='C. Potencial (PA)' />
                </div>
            </div>
        </div>
    )
    
    return(content)
}

export interface PlayerTechnicalsProps {
    technicals: any;
}
export function PlayerTechnicals({ technicals }: PlayerTechnicalsProps) {
    const content = (
        <div className='flex flex-col gap-1 w-full'>
            <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Ténicos</div>
            <PlayerAttribute value={technicals.heading} attrib='Cabeceamento' bg color />
            <PlayerAttribute value={technicals.corners} attrib='Escanteios' color  />
            <PlayerAttribute value={technicals.crossing} attrib='Cruzamentos' bg color />
            <PlayerAttribute value={technicals.tackling} attrib='Desarme' color />
            <PlayerAttribute value={technicals.finishing} attrib='Finalização' bg color />
            <PlayerAttribute value={technicals.dribbling} attrib='Finta' color />
            <PlayerAttribute value={technicals.longThrows} attrib='Lançamentos longos' bg color />
            <PlayerAttribute value={technicals.freekick} attrib='Livres' color />
            <PlayerAttribute value={technicals.marking} attrib='Marcação' bg color />
            <PlayerAttribute value={technicals.penaltyTaking} attrib='Marcação de Penaltis' color />
            <PlayerAttribute value={technicals.passing} attrib='Passe' bg color />
            <PlayerAttribute value={technicals.firstTouch} attrib='Primeiro toque' color />
            <PlayerAttribute value={technicals.longShots} attrib='Remates de longe' bg color />
            <PlayerAttribute value={technicals.technique} attrib='Técnica' color />
        </div>
    )
    
    return(content)
}

PlayerTechnicals.displayName = 'Player.Technicals'

export interface PlayerGoalkeeperProps {
    goalkeeper: any;
}
export function PlayerGoalkeeper({ goalkeeper }: PlayerGoalkeeperProps) {
    const content = (
        <div className='flex flex-col gap-1 w-full'>
            <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Goleiro</div>
            <PlayerAttribute value={goalkeeper.rushingOut} attrib='Saída do gol' bg color />
            <PlayerAttribute value={goalkeeper.tendencyPunch} attrib='Socar' color  />
            <PlayerAttribute value={goalkeeper.aerialAbility} attrib='Alcance aéreo' bg color />
            <PlayerAttribute value={goalkeeper.commandArea} attrib='Comando de Área' color />
            <PlayerAttribute value={goalkeeper.communication} attrib='Comunicação' bg color />
            <PlayerAttribute value={goalkeeper.eccentricity} attrib='Excentricidade' color />
            <PlayerAttribute value={goalkeeper.handling} attrib='Jogo de Mãos' bg color />
            <PlayerAttribute value={goalkeeper.throwing} attrib='Lançamentos' color />
            <PlayerAttribute value={goalkeeper.passing} attrib='Passe' bg color />
            <PlayerAttribute value={goalkeeper.kicking} attrib='Pontapé' color />
            <PlayerAttribute value={goalkeeper.firstTouch} attrib='Primeiro Toque' bg color />
            <PlayerAttribute value={goalkeeper.reflexes} attrib='Reflexos' color />
            <PlayerAttribute value={goalkeeper.oneOnOne} attrib='Um para um' bg color />
        </div>
    )
    
    return(content)
}

PlayerGoalkeeper.displayName = 'Player.Goalkeeper'

export interface PlayerMentalsProps {
    mentals: any;
}
export function PlayerMentals({ mentals }: PlayerMentalsProps) {
    const content = (
        <div className='flex flex-col gap-1 w-full max-lg:mt-6'>
            <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Mentais</div>
            <PlayerAttribute value={mentals.aggression} attrib='Agressividade' bg color />
            <PlayerAttribute value={mentals.anticipation} attrib='Antecipação' color  />
            <PlayerAttribute value={mentals.bravery} attrib='Bravura' bg color />
            <PlayerAttribute value={mentals.composure} attrib='Compostura' color />
            <PlayerAttribute value={mentals.concentration} attrib='Concentração' bg color />
            <PlayerAttribute value={mentals.decisions} attrib='Decisões' color />
            <PlayerAttribute value={mentals.determination} attrib='Determinação' bg color />
            <PlayerAttribute value={mentals.flair} attrib='Imprevisibilidade' color />
            <PlayerAttribute value={mentals.workRate} attrib='Índice de Trabalho' bg color />
            <PlayerAttribute value={mentals.leadership} attrib='Liderança' color />
            <PlayerAttribute value={mentals.positioning} attrib='Posicionamento' bg color />
            <PlayerAttribute value={mentals.offBall} attrib='Sem Bola' color />
            <PlayerAttribute value={mentals.teamwork} attrib='Trabalho de equipe' bg color />
            <PlayerAttribute value={mentals.vision} attrib='Visão de jogo' color />
        </div>
    )
    
    return(content)
}

PlayerMentals.displayName = 'Player.Mentals'

export interface PlayerPhysicalsProps {
    physicals: any;
    goalkeeper?: any;
    position?: string;
}
export function PlayerPhysicals({ physicals, position, goalkeeper }: PlayerPhysicalsProps) {
    var keeper = (<></>)
    if (position == 'GR'){
        keeper = (
            <div className='flex flex-col gap-1 w-full max-lg:mt-6'>
                <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Técnicos (GR)</div>
                <PlayerAttribute value={goalkeeper.freekick} attrib='Livres' bg color />
                <PlayerAttribute value={goalkeeper.penaltyTaking} attrib='Marcação de Penaltis' color />
                <PlayerAttribute value={goalkeeper.technique} attrib='Técnica' bg color />
            </div>
        )
    }
    const content = (
        <div className='flex flex-col gap-11 max-lg:gap-[3px] max-lg:mt-6'>
            <div className='flex flex-col gap-1 w-full'>
                <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Físicos</div>
                <PlayerAttribute value={physicals.acceleration} attrib='Aceleraçao' bg color />
                <PlayerAttribute value={physicals.agility} attrib='Agilidade' color  />
                <PlayerAttribute value={physicals.naturalFitness} attrib='Aptidão Física' bg color />
                <PlayerAttribute value={physicals.balance} attrib='Equilíbrio' color />
                <PlayerAttribute value={physicals.strength} attrib='Força' bg color />
                <PlayerAttribute value={physicals.jumpingReach} attrib='Impulsão' color />
                <PlayerAttribute value={physicals.stamina} attrib='Resistência' bg color />
                <PlayerAttribute value={physicals.pace} attrib='Velocidade' color />
            </div>
            {keeper}
        </div>
    )
    
    return(content)
}

PlayerPhysicals.displayName = 'Player.Physicals'
export interface PlayerHiddenProps {
    hidden: any;
}
export function PlayerHidden({ hidden }: PlayerHiddenProps) {
    const content = (
        <div className='flex flex-col gap-1 w-full max-lg:mt-6'>
            <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Escondidos</div>
            <PlayerAttribute value={hidden.adaptability} attrib='Adaptabilidade' bg color />
            <PlayerAttribute value={hidden.ambition} attrib='Ambição' color  />
            <PlayerAttribute value={hidden.loyalty} attrib='Lealdade' bg color />
            <PlayerAttribute value={hidden.pressure} attrib='Pressão' color />
            <PlayerAttribute value={hidden.professionalism} attrib='Profissionalismo' bg color />
            <PlayerAttribute value={hidden.sportsmanship} attrib='Desportivismo' color />
            <PlayerAttribute value={hidden.temperament} attrib='Temperamento' bg color />
            <PlayerAttribute value={hidden.controversy} attrib='Controvérsia' color />
            <PlayerAttribute value={hidden.consistency} attrib='Consistência' bg color />
            <PlayerAttribute value={hidden.dirtiness} attrib='Jogo sujo' color />
            <PlayerAttribute value={hidden.importantMatches} attrib='Jogos Importantes' bg color />
            <PlayerAttribute value={hidden.injuryProneness} attrib='Propensão a lesões' color />
            <PlayerAttribute value={hidden.versatility} attrib='Versatilidade' bg color />
        </div>
    )
    
    return(content)
}

PlayerHidden.displayName = 'Player.Hidden'
export interface PlayerOthersProps {
    player: any;
}
export function PlayerOthers({ player }: PlayerOthersProps) {
    const content = (
        <div className='flex flex-col gap-[3px] max-lg:mt-6'>
            <div className='flex flex-col gap-1 w-full'>
                <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Posições</div>
                <PlayerAttribute value={player.position} bg />
            </div>
            <div className='flex flex-col gap-1 w-full max-lg:mt-6'>
                <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Personalidade</div>
                <PlayerAttribute value={player.personality} bg />
            </div>
            <div className='flex flex-col gap-1 w-full max-lg:mt-6'>
                <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Descrição</div>
                <PlayerAttribute value={player.pressDescription} bg />
            </div>
            <div className='flex flex-col gap-1 w-full max-lg:mt-6'>
                <div className='font-semibold text-md text-offwhite px-1 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto'>Outros</div>
                <PlayerAttribute value={player.height + ' cm'} attrib='Altura' bg />
                <PlayerAttribute value={player.weight + ' kg'} attrib='Peso'  />
                <PlayerAttribute value={player.preferredFoot} attrib='Pé preferido' bg />
            </div>
        </div>
    )
    
    return(content)
}

PlayerOthers.displayName = 'Player.Others'
export interface PlayerAttributeProps {
    attrib?: string;
    value: string;
    bg?: boolean;
    keep?: boolean;
    color?: boolean;
}

export function PlayerAttribute({ attrib='', value, bg=false, keep=false, color=false }: PlayerAttributeProps) {
    var txColor = ''
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
        } catch(err) {}
    }
    return (
        <div className={clsx(
            'px-3 py-2 text-xs text-offwhite justify-between flex whitespace-nowrap overflow-hidden text-ellipsis max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto',
            bg ? 'rounded bg-grey-1 bg-opacity-40' : 'rounded bg-transparent',
            keep ? bg ? 'max-lg:bg-transparent' : 'max-lg:bg-grey-1 max-lg:bg-opacity-40' : ''
        )}>
            {attrib != '' ? <span title={attrib}>{attrib}</span> : ''}
            <span title={value} className={clsx(
                color ? [txColor, 'font-semibold'] : '',
                'whitespace-nowrap overflow-hidden text-ellipsis',
                color && bg ? 'stroke-offwhite' : 'stroke-offwhite',
            )}>{value != '' ? value : '-'}</span>
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
            <div className='bg-grey-1 bg-opacity-40 rounded w-[200px] h-[200px] mx-auto'>
                <img src={URI} className='w-[95%] mx-auto mt-[5%]' />
            </div>
        )
    } else {
        return (
            <div className='bg-grey-1 bg-opacity-40 rounded w-[200px] h-fit mx-auto text-blue-3'>
                <User size='100%' weight='fill' className='w-[95%] mx-auto mt-[5%]' />
            </div>
        )
    }
}

PlayerImage.displayName = 'Player.Image'

export interface PlayerExtrasProps {
    extras: any;
    position: string;
}

export function PlayerExtras({ extras, position }: PlayerExtrasProps) {
    if (position == 'GR'){
        return <PlayerGoalkeeper goalkeeper={extras} />
    } else {
        return <PlayerTechnicals technicals={extras} />
    }
}

PlayerExtras.displayName = 'Player.Extras'

export const Player = {
    Root: PlayerRoot,
    Content: PlayerContent,
    Image: PlayerImage,
    Header: PlayerHeader,
    Attribute: PlayerAttribute,
    Technicals: PlayerTechnicals,
    Goalkeeper: PlayerGoalkeeper,
    Extras: PlayerExtras,
    Mentals: PlayerMentals,
    Physicals: PlayerPhysicals,
    Hidden: PlayerHidden,
    Others: PlayerOthers,
}