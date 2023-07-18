import blackLogo from 'public/images/black-king.png'
import whiteLogo from 'public/images/white-king.png'

import { Cell } from '../Cell'
import { Colors } from '../Colors'

import { Figure, FigureNames } from './Figure'

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KING
	}

	canMove(target: Cell) {
		if (!super.canMove(target)) return false
		return true
	}
}
