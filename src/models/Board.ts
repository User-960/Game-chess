import {Cell} from './Cell'
import { Colors } from './Colors'

export class Board {
  // row and columns
  cells: Cell[][] = []

  public initCells() {
    // Create board with 8 rows
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []

      // Create 1 row with 8 cells
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // Black color
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // White color
        }
      }

      this.cells.push(row)
    }
  }
}