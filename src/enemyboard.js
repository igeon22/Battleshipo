import { createComplexElement, createElement } from "./elementCreate"
import { createShip } from "./ship"
import { finish } from "./finish"

var allBoards = []
var allPlayerShips = []
var  fPlayer = createShip()
fPlayer.name = "Ship1"
var  sPlayer = createShip()
sPlayer.name = "Ship2"
var tPlayer = createShip()
tPlayer.name = "Ship3"


function generateBoard(){
	let playerBoard = document.querySelector(".enemy-board")
	let actualX = 0
	let actualY = -1
	let f = 0

	for(let i = 0;i<100;i++){
		let board = {x:0,y:0,placeBoard:createElement(playerBoard,'button','single-board-e'),used:false,canHit:false,owner:null}
		allBoards.push(board)
		f +=1
		board.placeBoard.disabled = true
		// board.placeBoard.textContent = f
		board.placeBoard.addEventListener("click",()=>{
		})
		if(actualX>=10){
			actualX = 0
			actualY -= 1
			
		}
		actualX += 1
		board.x = actualX
		board.y = actualY

		
	}
	

	
	let c = 0
	generateShip(fPlayer,3)
	// allPlayerShips.player3 = true
	allPlayerShips.push(fPlayer)
	// console.log(fPlayer.stats.hits);

	generateShip(sPlayer,5)
	allPlayerShips.push(sPlayer)
	// allPlayerShips.player5 = true
	// console.log(sPlayer.stats.hits);

	generateShip(tPlayer,4)
	allPlayerShips.push(tPlayer)
	// allPlayerShips.player4 = true
	// console.log(tPlayer.stats.hits);
	// console.log(allPlayerShips);

	

	checkSunkPlayer()
	// console.log(allPlayerShips[0].posY);
	if(allPlayerShips[0].posY==allPlayerShips[1].posY || allPlayerShips[1].posY == allPlayerShips[2].posY ||allPlayerShips[0].posY == allPlayerShips[2].posY){
		let CoordY = Math.floor(Math.random()*-10)
		allPlayerShips[0].posY = CoordY
		CoordY = Math.floor(Math.random()*-10)
		allPlayerShips[1].posY = CoordY
		CoordY = Math.floor(Math.random()*-10)
		allPlayerShips[2].posY = CoordY
		// console.log("We found a bug!");
		document.location.reload()

	}
	
}



function checkSunkPlayer(){
	var count = 0
	for(let i = 0; i<allPlayerShips.length;i++){
		// console.log(allPlayerShips);
		if(count<=3 && allPlayerShips[i].stats.sunk == true )
		count +=1
		// console.log(count);
	}
	if(count==3){
		// console.log("All ships were sunk! Game Finished!");
		finish("You lost!")
	}
}

function generateShip(playerShip,length){
	// playerShip  =  createShip()
	playerShip.posX = []
	playerShip.stats.length = length
	playerShip.stats.hits = 0
	let CoordX = (Math.random() * ((10-playerShip.stats.length)-1+1)) + 1
	CoordX = Math.round(CoordX)
	let tf = true
	while(tf == true){
		if(CoordX +playerShip.stats.length>10){
			CoordX = (Math.random() * ((10-playerShip.stats.length)-1+1)) + 1
			CoordX = Math.round(CoordX)

			tf = true
		}
		else{
			tf = false
		}

	}
	playerShip.startPos = CoordX

	// let CoordY = -(Math.random() * ((9)+1-1))
	let CoordY = Math.floor(Math.random()*-10)
	let fg = true
	while(fg == true){
		if(CoordY>=0 || CoordY<-10){
			// CoordY = -(Math.random() * ((9)+1-1))
			CoordY = Math.floor(Math.random()*-10)-1
			CoordY = Math.round(CoordY)
			// console.log('changed');
			
			fg = true
			continue
		}
		else if(CoordY == -0){
			// CoordY = -(Math.random() * ((9)+1-1))
			CoordY = Math.floor(Math.random()*-10)-1
			CoordY = Math.round(CoordY)
			// console.log('changed');
			
			fg = true
			continue
		}
		else{
			fg = false
			break
		}

	}
	CoordY = Math.round(CoordY)
	// console.log(CoordY);
	// console.log(playerShip.posX);
	playerShip.posY = CoordY
	playerShip.posGen()
	placeShip(allBoards,playerShip.startPos,playerShip.posY,playerShip)
	placeRest(allBoards,playerShip,playerShip.posX,playerShip.posY,playerShip)
	// console.log(playerShip.startPos,playerShip.posY);
	// console.log(playerShip.posX);
	return playerShip

}

function playTurn(index){
	
	checkSunkPlayer()
	// var kk = document.querySelectorAll(".single-board-e")
	// for(let i = 0;i<kk.length;i++){
	// 	console.log(i,"-",kk[i]);
	// 	kk[i].disabled = true

	// }


}

function placeRest(board,ship,shipX,shipY,own){
	let aX = -1
	for(let i = 0;i<ship.posX.length;i++){
		
		aX += 1
		// console.log(ship.posX[aX]);
		loopTrough( ship.posX[aX],board,shipY,own)
		
	}
	// console.log('Ship:',shipX[0],shipY,own);
	
}

function loopTrough(target,container,targetY,owner){
	for(let i = 0; i< container.length;i++){
		// container[i].placeBoard.className = 'single-board-base'
		if(target==container[i].x && targetY == container[i].y ){
			// console.log('Good job!');
			container[i].owner = owner
			container[i].placeBoard.addEventListener('click',()=>{
				container[i].placeBoard.className = 'single-board-hit'
				container[i].canHit = true
				container[i].owner.hit()
				// console.log('second',container[i].owner.stats.hits);
				container[i].owner.isSunk()
				// console.log(owner.name);
				// console.log(container[i].owner.stats.sunk);
				if(container[i].owner.name == "Ship1"){

					allPlayerShips[0] = container[i].owner
				}
				if(container[i].owner.name == "Ship2"){

					allPlayerShips[1] = container[i].owner
				}
				if(container[i].owner.name == "Ship3"){

					allPlayerShips[2] = container[i].owner
				}
				checkSunkPlayer()
			})
		}
	}

}

function placeShip(board,coordx,coordy,owner){
	for(let i=0;i<board.length;i++){
		// console.log(allBoards[i].x,allBoards[i].y);


		// if(board[i].x == coordx && board[i].y == coordy){
		// 	board[i].canHit = true
		// 	board[i].placeBoard.addEventListener('click',()=>{
		// 		if(board[i].used ==false && board[i].canHit == true){

		// 			board[i].owner = owner

		// 			board[i].placeBoard.className = 'single-board-hit'
		// 			board[i].used = true
		// 			board[i].owner.stats.hits += 1
		// 			// console.log('first',board[i].owner.stats.hits);
		// 			board[i].owner.isSunk()

		// 			// console.log(board[i].x,board[i].y,board[i].used);

		// 		}
				
				
		// 	})
		// }
		board[i].placeBoard.addEventListener('click',()=>{
			if(board[i].used ==false){
				
				// console.log(board[i].x,board[i].y,board[i].used);
				allBoards[i].placeBoard.className = 'single-board-used'
				board[i].used = true
				checkSunkPlayer()

			}

		})
		// else{

		// }
	}
}
// generateBoard()
// board2()
// playTurn(0)
export{generateBoard as enemyGen,playTurn}