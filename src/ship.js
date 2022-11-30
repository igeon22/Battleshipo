

// console.log("Hits: ",this.stats.hits);


function createShip(){
	let Ship = {name:'',stats:{length:3,hits:0,sunk:false},hit:function(){this.stats.hits ++;},
	isSunk:function(){
		// console.log(this.stats.hits);
		if(this.stats.hits>=this.stats.length){
			this.stats.sunk = true
			// console.log("A battleship were sunk!");
		}
	},posGen:function(){
		let tv = this.startPos
		// console.log('object');
		for(let i = 0;i<this.stats.length;i++){
			tv++;
			this.posX.push(tv)
		}
		
	},posX:[],posY:0,startPos:0,sunk:false,}

	return Ship
}


// var newShip = Ship
// newShip.hit()
// var a = (Math.random() * ((10-Ship.stats.length)-1+0)) + 1
// a = Math.round(a)
// console.log(a);


export{createShip}