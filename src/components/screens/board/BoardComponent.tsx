import { FC, Fragment, useState } from 'react'

import styles from './Board.module.scss'
import CellComponent from './CellComponent'
import { Board } from '@/models/Board'
import { Cell } from '@/models/Cell'

interface IBoardProps {
	board: Board
	setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>()

	const click = (cell: Cell) => {
		if (cell.figure) {
			setSelectedCell(cell)
		}
	}

	return (
		<>
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
		</>
	)
}

export default BoardComponent
