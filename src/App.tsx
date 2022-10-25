import './styles/global.css'
import { Text } from './components/Text'
import { SoccerBall, Suitcase, UserCircle } from 'phosphor-react'
import { Player } from './components/Player'
import { Header } from './components/Header'
import { useEffect, useMemo, useState } from 'react'
import { TextInput } from './components/TextInput'
import DataTable from 'react-data-table-component';

export interface Player {
	name: string,
	nationality: string,
	club: string,
	position: string,
	age: number,
	wage: string,
}

const paginationComponentOptions = { 
	rowsPerPageText: 'Registros por página:', 
	rangeSeparatorText: 'de', 
	noRowsPerPage: false, 
	selectAllRowsItem: false, 
	selectAllRowsItemText: 'Todos' }

const columns = [
    {
        name: 'Nacionalidade',
        selector: (row:Player) => row.nationality,
        sortable: true,
    },
    {
        name: 'Nome',
        selector: (row:Player) => row.name,
        sortable: true,
    },
    {
        name: 'Clube',
        selector: (row:Player) => row.club,
        sortable: true,
    },
    {
        name: 'Posição',
        selector: (row:Player) => row.position,
    },
    {
        name: 'Idade',
        selector: (row:Player) => row.age,
    },
    {
        name: 'Salário',
        selector: (row:Player) => row.wage,
    },
];

const customStyles = {
	table: {
		style: {
			fontFamily: 'Inter',
			backgroundColor: 'transparent',
		}
	},
	subHeader: {
		style: {
			backgroundColor: 'transparent',
			paddingRight: 0,
			paddingLeft: 0,
		}
	},
	headRow: {
		style: {
			borderRadius: '4px',
			backgroundColor: 'transparent',
			color: '#FFF4D3',
		}
	},
    rows: {
        style: {
			marginTop: '8px',
			borderRadius: '4px',
			backgroundColor: 'rgba(100, 114, 136, 0.4)',
			color: '#FFF4D3',
			padding: '4px',
        },
    },
    headCells: {
        style: {
			fontSize: '14px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
	pagination: {
		style: {
			borderRadius: '4px',
			backgroundColor: 'transparent',
			color: '#FFF4D3',
			marginTop: '8px',
		},
		pageButtonsStyle: {
			color: '#FFF4D3',
			fill: '#FFF4D3',
		}
	},
	noData: {
		style: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: '8px',
			borderRadius: '4px',
			backgroundColor: 'rgba(100, 114, 136, 0.4)',
			color: '#FFF4D3',
			padding: '24px',
		},
	}
};

export function App() {
	const [players, setPlayers] = useState<Player[]>([])
	const [filterName, setFilterName] = useState('')
	const [filterClub, setFilterClub] = useState('')
	const [filterNationality, setFilterNationality] = useState('')
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  
	useEffect(() => {
		// axios.get('http://192.168.15.8:8000/bal/players').then(response => {
		// 	setPlayers(response.data)
		// })
		fetch('https://balp-api.herokuapp.com/bal/players')
			.then(response => response.json())
			.then(data => setPlayers(data))
	}, [])
	
	const filteredItems = players.filter(item => item.name && item.name.toLowerCase().includes(filterName.toLowerCase()))
	.filter(item => item.club && item.club.toLowerCase().includes(filterClub.toLowerCase()))
	.filter(item => item.nationality && item.nationality.toLowerCase().includes(filterNationality.toLowerCase()))

	const subHeaderComponentMemo = useMemo(() => {
		return (
			<div className='flex flex-col gap-1 w-full pb-4'>
				<Text className='text-offwhite font-semibold'>Filtros</Text>
				<div className='grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1'>
						<TextInput.Root>
							<TextInput.Input onChange={e => setFilterName(e.target.value)} placeholder='Nome' />
						</TextInput.Root>
						<TextInput.Root>
							<TextInput.Input onChange={e => setFilterClub(e.target.value)} placeholder='Clube' />
						</TextInput.Root>
						<TextInput.Root>
							<TextInput.Input onChange={e => setFilterNationality(e.target.value)} placeholder='Nacionalidade' />
						</TextInput.Root>
				</div>
			</div>
		);
	}, [[filterName, filterClub, filterNationality], resetPaginationToggle]);

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
			<div className='max-w-[1024px] mx-auto py-8 px-2 max-lg:px-8'>
				<DataTable
					columns={columns}
					data={filteredItems}
					subHeader
					subHeaderComponent={subHeaderComponentMemo}
					customStyles={customStyles}
					pagination
					paginationResetDefaultPage={resetPaginationToggle}
					paginationComponentOptions={paginationComponentOptions}
					responsive
					noDataComponent='Sem nenhum registro encontrado.'
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
