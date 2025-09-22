//Examine the document object
console.dir(document);

//get properties
console.log(document.URL);
console.log(document.lastModified);
console.log(document.title);
console.log(document.doctype);

console.log(document.head);
console.log(document.body);

console.log(document.all);

console.log(document.forms);
console.log(document.links);
console.log(document.images);

//--change value
console.log(document.title);
document.title = "Document object Notation";
console.log(document.title);