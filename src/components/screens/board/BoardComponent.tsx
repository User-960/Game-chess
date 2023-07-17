import { FC, Fragment } from 'react'
import styles from './Board.module.scss'
import { Board } from '@/models/Board'
import { Cell } from '@/models/Cell'
import CellComponent from './CellComponent'

interface IBoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardProps> = ({board, setBoard}) => {
  return <>
    <div className={styles.board}>
      {board.cells.map((row: Cell[], index: number) => 
        <Fragment key={index}>
          {row.map(cell => <CellComponent key={cell.id} cell={cell}/>)}
        </Fragment>
      )}
    </div>
  </>
}

export default BoardComponent