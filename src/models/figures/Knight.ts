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
}
