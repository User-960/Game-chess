import { FC, useEffect, useRef, useState } from 'react'

import styles from './Timer.module.scss'
import { Colors } from '@/models/Colors'
import { Player } from '@/models/Player'

interface ITimerProps {
	currentPlayer: Player | null
	restart: () => void
}

const Timer: FC<ITimerProps> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState<number>(300)
	const [whiteTime, setWhiteTime] = useState<number>(300)

	const timer = useRef<null | ReturnType<typeof setInterval>>(null)

	useEffect(() => {
		startTimer()
	}, [currentPlayer])

	const startTimer = () => {
		// if player move figure, timer will stop for him
		if (timer.current) {
			clearInterval(timer.current)
		}

		const callback =
			currentPlayer?.color === Colors.WHITE
				? decrementWhiteTimer
				: decrementBlackTimer

		timer.current = setInterval(callback, 1000)
	}

	const decrementBlackTimer = () => {
		setBlackTime(prev => prev - 1)
	}

	const decrementWhiteTimer = () => {
		setWhiteTime(prev => prev - 1)
	}

	const handleRestart = () => {
		setBlackTime(300)
		setWhiteTime(300)
		restart()
	}

	return (
		<div className={styles.timer}>
			<button className={styles.button} onClick={handleRestart}>
				Restart Game
			</button>

			<div className={styles.counter}>
				<p>
					<span className={styles.black}>Black</span> - {blackTime}
				</p>
				<p>
					<span className={styles.white}>White</span> - {whiteTime}
				</p>
			</div>
		</div>
	)
}

export default Timer
