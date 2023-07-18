import Image from 'next/image'
import { FC } from 'react'

import styles from './LostFigures.module.scss'
import { Figure } from '@/models/figures/Figure'

interface ILostFiguresProps {
	title: string
	figures: Figure[]
}

const LostFigures: FC<ILostFiguresProps> = ({ title, figures }) => {
	return (
		<div className={styles.lost}>
			<h3>{title}</h3>
			{figures.map((figure: Figure) => (
				<div key={figure.id}>
					{figure.name}{' '}
					{figure.logo && (
						<Image
							src={figure.logo}
							alt={figure.name}
							width={24}
							height={24}
							draggable={false}
							priority={true}
						/>
					)}
				</div>
			))}
		</div>
	)
}

export default LostFigures
