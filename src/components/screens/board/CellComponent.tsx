import Image from 'next/image'
import { FC } from 'react'

import styles from './Board.module.scss'
import { Cell } from '@/models/Cell'

interface ICellProps {
	cell: Cell
	selected: boolean
	click: (cell: Cell) => void
}

const CellComponent: FC<ICellProps> = ({ cell, selected, click }) => {
	return (
		<div
			className={[
				styles.cell,
				styles[cell.color],
				selected ? styles.selected : ''
			].join(' ')}
			onClick={() => click(cell)}
			style={{ background: cell.available && cell.figure ? 'green' : '' }}
		>
			{cell.available && !cell.figure && (
				<div className={styles.available}></div>
			)}
			{cell.figure?.logo && (
				<Image
					className={styles.figure}
					src={cell.figure?.logo}
					alt={cell.figure.name}
					width={48}
					height={48}
					draggable={false}
					priority
				/>
			)}
		</div>
	)
}

export default CellComponent
