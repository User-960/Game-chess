import { FC, Fragment, useEffect, useState } from 'react'

import styles from './Board.module.scss'
import CellComponent from './CellComponent'
import { Board } from '@/models/Board'
import { Cell } from '@/models/Cell'
import { Player } from '@/models/Player'

interface IBoardProps {
	board: Board
	setBoard: (board: Board) => void
	currentPlayer: Player | null
	swapPlayer: () => void
}

const BoardComponent: FC<IBoardProps> = ({
	board,
	setBoard,
	currentPlayer,
	swapPlayer
}) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	const click = (cell: Cell) => {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			swapPlayer()
			setSelectedCell(null)
			updateBoard()
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell)
			}
		}
	}

	useEffect(() => {
		highlightCells()
	}, [selectedCell])

	const highlightCells = () => {
		board.highlightCells(selectedCell)
		updateBoard()
	}

	const updateBoard = () => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.player}>
				Current Player:{' '}
				<span
					className={
						currentPlayer?.color === 'white' ? styles.white : styles.black
					}
				>
					{currentPlayer?.color}
				</span>
			</h3>
			<div className={styles.board}>
				{board.cells.map((row: Cell[], index: number) => (
					<Fragment key={index}>
						{row.map(cell => (
							<CellComponent
								key={cell.id}
								click={click}
								cell={cell}
								selected={
									cell.x === selectedCell?.x && cell.y === selectedCell?.y
								}
							/>
						))}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default BoardComponent
