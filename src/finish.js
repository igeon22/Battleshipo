function createElement(parent,type,className){
	var elt = document.createElement(type)
	elt.className = className
	var parent = parent
	parent.append(elt)
	return elt

}

function createComplexElement(parent,type,className,idName,textContent){
	var elt = document.createElement(`${type}`)
	elt.className = className
	elt.id = idName
	elt.textContent = textContent
	parent.append(elt)
	return elt

}

import {generateBoard} from "./gameboard"
import {enemyGen} from "./enemyboard"



function createMenu(txt){
	let msg1 = document.querySelector("#m-1")
	let msg2 = document.querySelector("#m-2")
	let body = document.querySelector("body")
	let container = createElement(body,'section','start-container')

	let text = createComplexElement(container,'p','message','',txt)
	let startBtn = createComplexElement(container,'button','start','','Ok')
	let link = createComplexElement(startBtn,'a','','','')

	let playerBoard = document.querySelector(".player-board")
	let EnemyBoard = document.querySelector(".enemy-board")
	let tx = createComplexElement(container,'p','end','','Created by Igeon22')
	playerBoard.remove()
	EnemyBoard.remove()
	msg1.remove()
	msg2.remove()


	startBtn.addEventListener('click',()=>{
		// generateBoard()
		// enemyGen()
		// board2()
		// msg2.textContent = "Player"
		// msg1.textContent = "Enemy"
		container.remove()
		let body = document.querySelector("body")
		window.location.reload()
		// setTimeout(() => {
			
		// }, 2000);
		
	})
}

// createMenu('You won the game!')
export{createMenu as finish}
