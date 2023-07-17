import { FC } from 'react'
import styles from './Board.module.scss'

const CellComponent: FC = () => {
  return <div className={styles.cell}>
    Cell
  </div>
}

export default CellComponent