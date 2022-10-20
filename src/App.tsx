import './styles/global.css'
import { Text } from './components/Text'
import { SoccerBall, Suitcase, UserCircle } from 'phosphor-react'
import { Player } from './components/Player'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function App() {
	const [ players, setPlayers ] = useState<any>([])
  
	useEffect(() => {
	  axios('http://127.0.0.1:8000/bal/players').then(response => {
		setPlayers(response.data)
	  })
	}, [])


  	return (
		<div className='bg-blue-4 h-full min-h-screen'>
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
			{players.map(player => {
				return (
					<Player.Root>
						<Player.Header player={player}></Player.Header>
						<Player.Content>
							<Player.Extras extras={player.extras} position={player.position} />
							<Player.Mentals mentals={player.mentals} />
							<Player.Physicals physicals={player.physicals} goalkeeper={player.extras} position={player.position} />
							<Player.Hidden hidden={player.hidden} />
							<Player.Others player={player} />
						</Player.Content>
					</Player.Root>
				)
			})}
			
		</div>
  	)
}
