document.querySelector('#q1').onclick = mySort;
document.querySelector('#q1').onclick = mySortDesc;

function mySort() {
	let rad = document.querySelector('.flex');
	for (let i = 0; i < rad.children.length; i++) {
		if (+rad.children[i].getAttribute('cost') > +rad.children[j].getAttribute('cost')) {
			replacedNode = rad.replaceChild(rad.children[j], rad.children[i]);
			insertAfter(replacedNode, rad.children[i]);
		}
	}
}

function mySort() {
	let rad = document.querySelector('.flex');
	for (let i = 0; i < rad.children.length; i++) {
		if (+rad.children[i].getAttribute('cost') < +rad.children[j].getAttribute('cost')) {
			replacedNode = rad.replaceChild(rad.children[j], rad.children[i]);
			insertAfter(replacedNode, rad.children[i]);
		}
	}
}


function insertAfter(elem, refElem){
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}