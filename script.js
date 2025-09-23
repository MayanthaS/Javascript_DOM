//Examine the document object
/*
console.dir(document);

//get properties
console.log(document.URL);
console.log(document.lastModified);
console.log(document.title);
console.log(document.doctype);

console.log(document.head);
console.log(document.body);

console.log(document.all);
console.log(document.all[11]); 

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.body); // Will now show the <body> element
});



console.log(document.all);

console.log(document.forms);
console.log(document.links);
console.log(document.images);

//--change value
console.log(document.title);
document.title = "Document object Notation";
console.log(document.title);

//not best way
document.all[11].textContent = "Shopping Item List"
console.log(document.all[11]);

//--select element

console.log(document.getElementById('li-items'));
var formTtile = document.getElementById('frmt');
console.log(formTtile);


//--textContent,innertext and inner html
/*
formTtile.textContent ="Add shopping Items";
formTtile.innerText ="Add shopping Items";
formTtile.innerHTML ="<i>Hello </i> ADD_ITEMS";
console.log(formTtile.textContent);
console.log(formTtile.innerText);
console.log(formTtile.innerHTML);

//-styling
var navigation = document.getElementById('navbar');
navigation.style.backgroundColor ='#090209';
navigation.style.color = 'white';

//--select element using class name
var items = document.getElementsByClassName('items');
console.log(items);
console.log(items[0]);
items[2].textContent = 'Hand bag';
console.log(items[2]);

//styling 
items[2].style.fontFamily ='serif';
items[2].style.backgroundColor='#ebca14';

//--change back color of all the list items--
for(var i of items){
    i.style.backgroundColor ='#a7520c';
}*/

//--select elements using tag name --
/*
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[2].textContent= 'Book';

//--styling
li[2].style.backgroundColor = "#ebca14";
li[2].style.color ='#fff';
//--change color backk all 
for(var i of li){
    i.style.backgroundColor ="#ebca14";
}
*/

// query selector
/*
//--    ID---
var hd = document.querySelector('#navbar');
hd.style.border ='solid 1px #000';

//--tag
var input = document.querySelector('input');
input.style.backgroundColor ="#ebca14";
input.value ='paintbucket';

//--class 
var item = document.querySelector(".items");
item.style.backgroundColor ="#ebca14";

//option-tag
var input = document.querySelector("option");
input.style.backgroundColor="#ebca14";


//mix select
var it = document.querySelector('div .frm #frmt');
it.style.color ="#ebca14";

//--select element using query selector  all
//--ID
var hd = document.querySelectorAll('#hdt');
console.log(hd);
//--tag
var dv = document.querySelectorAll('div');
console.log(dv);
//--class
var cl = document.querySelectorAll('.items');
console.log(cl);

//--mix selctors
var mx = document.querySelectorAll('div .list li');
console.log(mx);
*/
// pseudo classses
// Graball the odd  list item
var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');  
console.log(odd);
console.log(even);
for(var i of odd){
    i.style.backgroundColor ="#ebca14";
}
for(var i of even){
    i.style.backgroundColor ="#000a9dff";
}