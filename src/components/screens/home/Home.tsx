import { FC, useEffect, useState } from 'react'

import BoardComponent from '../board/BoardComponent'

import { Board } from '@/models/Board'

const Home: FC = () => {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restart()
	}, [])

	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)

		// console.log(newBoard.cells)
	}

	return (
		<div className='wrapper-inner-page'>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}

export default Home
