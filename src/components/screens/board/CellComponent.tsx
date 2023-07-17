import { FC } from 'react'
import styles from './Board.module.scss'
import { Cell } from '@/models/Cell'
import cn from 'clsx'

interface ICellProps {
  cell: Cell
}

const CellComponent: FC<ICellProps> = ({cell}) => {
  return <div className={[styles.cell, styles[cell.color]].join(' ')}>
    {/* {cell.figure} */}
  </div>
}

export default CellComponent