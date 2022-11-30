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



function createMenu(){
	let msg1 = document.querySelector("#m-1")
	let msg2 = document.querySelector("#m-2")
	let body = document.querySelector("body")
	let container = createElement(body,'section','start-container')

	let text = createComplexElement(container,'p','message','','Sink all enemy ships to win')
	let txtLink = createComplexElement(container,'a','','','')

	let startBtn = createComplexElement(container,'button','start','','Start Game')
	let t = createComplexElement(container,'p','end','','Created by Igeon22')

	startBtn.addEventListener('click',()=>{
		generateBoard()
		// enemyGen()
		// board2()
		msg2.textContent = "Player"
		msg1.textContent = "Enemy"
		container.remove()
		// setTimeout(() => {
			
		// }, 2000);
		
	})
}

createMenu()
export{createMenu}
