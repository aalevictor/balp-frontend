import './styles/global.css'
import bg from './assets/bg.png'
import { Form } from './components/Form'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Key, SoccerBall, Suitcase, TwitchLogo, UserCircle } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'
import { Player } from './components/Player'
import { Header } from './components/Header'

export function App() {
  const player = {
		"id": "7acab7dd-02de-4c92-a741-1a85d2944bb4",
		"bal": "teste",
		"uniqueID": "2002042282",
		"name": "Kenzo Tenma",
		"nickname": null,
		"birthDate": "2002-08-09",
		"age": 22,
		"nationality": "JPN",
		"secondNationality": "-",
		"height": 193,
		"weight": 96,
		"wage": 452000,
		"contractEnd": "2029-06-30",
		"club": "Atalanta",
		"pressDescription": "Médio esforçado",
		"personality": "Bastante Determinado",
		"preferredFoot": "Esquerdo",
		"position": "MD, M (C)",
		"currentAbility": 167,
		"potentialAbility": 169,
		"hidden": {
			"adaptability": 8,
			"ambition": 11,
			"consistency": 13,
			"controversy": 10,
			"sportsmanship": 12,
			"dirtiness": 11,
			"importantMatches": 9,
			"loyalty": 11,
			"pressure": 13,
			"professionalism": 10,
			"injuryProneness": 9,
			"temperament": 12,
			"versatility": 17
		},
		"mentals": {
			"aggression": 13,
			"anticipation": 15,
			"bravery": 12,
			"composure": 15,
			"concentration": 15,
			"decisions": 17,
			"determination": 15,
			"flair": 7,
			"leadership": 10,
			"offBall": 14,
			"positioning": 15,
			"teamwork": 18,
			"vision": 20,
			"workRate": 16
		},
		"physicals": {
			"acceleration": 10,
			"agility": 10,
			"balance": 15,
			"jumpingReach": 15,
			"naturalFitness": 20,
			"pace": 10,
			"stamina": 13,
			"strength": 16
		},
		"technicals": {
			"corners": 9,
			"crossing": 11,
			"dribbling": 11,
			"finishing": 8,
			"firstTouch": 1,
			"freekick": 11,
			"heading": 11,
			"longShots": 13,
			"longThrows": 11,
			"marking": 13,
			"passing": 20,
			"penaltyTaking": 7,
			"tackling": 14,
			"technique": 18
		}
  }
  return (
    <>
      <Header.Root>
        <Header.Item>
          <SoccerBall size={20} />
          <Text size='text-sm' className='text-offwhite font-semibold'>BAL</Text>
        </Header.Item>
        <Header.Item>
          <Suitcase size={20} />
          <Text size='text-sm' className='text-offwhite font-semibold'>BAP</Text>
        </Header.Item>
        <Header.Item>
          <UserCircle size={20} />
          <Text size='text-sm' className='text-offwhite font-semibold'>aalevictor</Text>
        </Header.Item>
      </Header.Root>
      <div className='h-fit relative p-2 py-4 grid grid-flow-col gap-3 mx-auto w-[90%] max-w-[1024px]'>
        <Player.Header player={player}></Player.Header>
      </div>
    </>
  )
}
