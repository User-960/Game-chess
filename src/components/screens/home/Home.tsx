import { table } from 'console'
import { FC, useEffect, useState } from 'react'

import BoardComponent from '../board/BoardComponent'
import LostFigures from '../lost-figures/LostFigures'

import styles from './Home.module.scss'
import { Board } from '@/models/Board'
import { Colors } from '@/models/Colors'
import { Player } from '@/models/Player'

const Home: FC = () => {
	const [board, setBoard] = useState(new Board())
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

	useEffect(() => {
		restart()
		setCurrentPlayer(whitePlayer)
	}, [])

	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)

		// console.log(newBoard.cells)
	}

	const swapPlayer = () => {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		)
	}

	return (
		<div className='wrapper-inner-page'>
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>

			<div>
				<LostFigures title='Black Figures' figures={board.lostBlackFigures} />
				<LostFigures title='White Figures' figures={board.lostWhiteFigures} />
			</div>
		</div>
	)
}

export default Home
