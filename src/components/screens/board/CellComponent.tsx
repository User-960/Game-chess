import Image from 'next/image'
import { FC } from 'react'

import styles from './Board.module.scss'
import { Cell } from '@/models/Cell'

interface ICellProps {
	cell: Cell
}

const CellComponent: FC<ICellProps> = ({ cell }) => {
	return (
		<div className={[styles.cell, styles[cell.color]].join(' ')}>
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
