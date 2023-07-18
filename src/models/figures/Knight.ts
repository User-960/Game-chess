import blackLogo from 'public/images/black-knight.png'
import whiteLogo from 'public/images/white-knight.png'

import { Cell } from '../Cell'
import { Colors } from '../Colors'

import { Figure, FigureNames } from './Figure'

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KNIGHT
	}

	// 4,4
	// ---
	// 2,3
	// 3,2
	// 6,3
	// 3,6
	// 5,6
	// 6,5
	// 5,3
	// 3,5
	// Difference between cells is only 2 and 1
	// without dependence of which x or y
	canMove(target: Cell) {
		if (!super.canMove(target)) return false
		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)
		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
	}
}
