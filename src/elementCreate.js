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

export{createComplexElement,createElement}