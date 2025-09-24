//traversing the dom--

 var itemList = document.querySelector('#li-items');

 //parent node
 /*
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = "#afafaf";

    console.log(itemList.parentNode.parentNode);




//Parent Element

//Most of the time similar to parent NODE
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='#6f6f6f';
console.log(itemList.parentElement.parentElement);

//child node
console.log(itemList.childNodes); 

//children --
console.log(itemList.children);
console.log(itemList.children[2].textContent);
itemList.children[2].style.backgroundColor ='#ebca14';

//--first child
//work like childnodes
console.log(itemList.firstChild);

//---First Element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor ='#ebca14';

//--last Element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor ='#ebca14';
*/
//--next sibilling---
/*
console.log(itemList.nextSibling); 
*/
//--next sibling elemt
/*
console.log(itemList.nextElementSibling); 
itemList.nextElementSibling.style.backgroundColor ='#ebca14';

//--previous sibling
console.log(itemList.previousSibling);

//--previous element sibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor =' #ebca14';
*/


//create element 

//--create and element--
var input = document.createElement('input');

// add a class
input.className = "test";

// add an ID
input.id = 'last';

// add an attribute
input.setAttribute('type','text');
console.log(input);

//-create a Div
var newDiv = document.createElement('div');

//create text node
var newText = document.createTextNode('How are you!');

//add text to div
newDiv.appendChild(newText);
console.log(newDiv);