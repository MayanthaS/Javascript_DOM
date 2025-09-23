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
*/
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

//formTtile.textContent ="Add shopping Items";
formTtile.innerText ="Add shopping Items";
//console.log(formTtile.textContent);
console.log(formTtile.innerText);

formTtile.innerHTML ="<i>Hello </i> ADD_ITEMS";