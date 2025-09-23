//traversing the dom--

 var itemList = document.querySelector('#li-items');

 //parent node
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = "#afafaf";

    console.log(itemList.parentNode.parentNode);




//Parent Element

//Most of the time similar to parent NODE
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='#6f6f6f';
console.log(itemList.parentElement.parentElement);

//child node
console.log(itemList.childNodes); 