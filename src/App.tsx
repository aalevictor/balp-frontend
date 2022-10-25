import './styles/global.css'
import { Text } from './components/Text'
import { SoccerBall, Suitcase, UserCircle } from 'phosphor-react'
import { Player } from './components/Player'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TextInput } from './components/TextInput'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Nacionalidade',
        selector: row => row.nationality,
        sortable: true,
    },
    {
        name: 'Nome',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Clube',
        selector: row => row.club,
    },
    {
        name: 'Posição',
        selector: row => row.position,
    },
    {
        name: 'Idade',
        selector: row => row.age,
    },
    {
        name: 'Salário',
        selector: row => row.wage,
        sortable: true,
    },
];

const customStyles = {
	table: {
		style: {
			fontFamily: 'Inter',
		}
	},
    rows: {
        style: {
            minHeight: '72px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
			fontSize: '16px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
	rdt_Pagination: {
		style: {
			borderRadius: '4px',
		}
	}
};

export function App() {
	const [ players, setPlayers ] = useState<any>([])
	const [ currentPage, setCurrentPage ] = useState(1)
  
	useEffect(() => {
		// axios.get('http://192.168.15.8:8000/bal/players').then(response => {
		// 	setPlayers(response.data)
		// })
		fetch('http://192.168.15.8:8000/bal/players')
			.then(response => response.json())
			.then(data => setPlayers(data))
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
			<div className='h-fit relative p-2 py-8 mx-auto w-[90%] max-w-[1024px] flex flex-col gap-4 my-auto'>
				<div className='flex flex-col gap-1 w-full'>
					<Text className='text-offwhite font-semibold'>Filtros</Text>
					<div className='grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1'>
						<TextInput.Root>
							<TextInput.Input placeholder='Nome' />
						</TextInput.Root>
						<TextInput.Root>
							<TextInput.Input placeholder='Clube' />
						</TextInput.Root>
						<TextInput.Root>
							<TextInput.Input placeholder='Nacionalidade' />
						</TextInput.Root>
						<TextInput.Root>
							<TextInput.Input placeholder='Segunda Nacionalidade' />
						</TextInput.Root>
					</div>
				</div>
			</div>
			<div className='max-w-[1024px] mx-auto pb-10 px-2 rounded'>
				<DataTable
					columns={columns}
					data={players}
					customStyles={customStyles}
					pagination
				/>
			</div>
			{/* {players.map(player => {
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
			})} */}
			
		</div>
  	)
}
