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

//insert element to the document
var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

input.style.backgroundColor = '#ebca14';

form.insertBefore(input,button);


//  usin internal events

function btnclick(x){
    alert(x);
}
    */

// --Intergrated Function (anonymous function)---
/*
var button1 = document.getElementById('c-btn').addEventListener
('click',function(){
  alert("Button Clicked!");
})
*/
var button1 = document.getElementById('c-btn').addEventListener
('click',function(){
    alert("clicked");
})

//--Named function--
document.getElementById('c-btn').addEventListener('mouseout',textChange);
function textChange(){
    alert("Mouse out");
    document.getElementById('c-btn').textContent ="Buy one";
}


// --parameterized function
document.getElementById('i-btn').addEventListener('click',
    function(){
        changeListBack("Hello");
    });

function changeListBack(x){
    document.getElementById('li-items').style.backgroundColor ='#ebca14';
    document.getElementById('li-items').firstElementChild.textContent = x;
}

//event parameter

var button2 =document.getElementById('e-btn').addEventListener
('click',clickbtn);

function clickbtn(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.classList);
    console.log(e.target.type);


    //out put
    /*
var output = document.getElementById('output');
output.innerHTML = '<h4>Class name : ' + e.target.classList[0] + '</h4>';

*/
// clciking position
console.log(e.clientX);
console.log(e.clientY);

//check key press
console.log(e.altKey);



}

//bubling and capturing

//bubling

document.getElementById('mypy1').addEventListener('click',
    function(){
        alert("you clicked white element");
    } ,false);
document.getElementById('myDiv1').addEventListener('click',
    function(){
        alert("you clicked the orange element");

    },false);

//capturing
document.getElementById('mypy2').addEventListener('click',
    function(){
        alert("you clicked white element");
    } ,true);
document.getElementById('myDiv2').addEventListener('click',
    function(){
        alert("you clicked the orange element");

    },true);
    


    // remove event listner
    function myFunc(){
        alert("Button has clicked");
    }

    //add 
    document.getElementById('ev-btn').addEventListener('click',
    myFunc );

    //Remove
    document.getElementById('rm-btn').addEventListener('click',
        function(){
            document.getElementById('ev-btn').removeEventListener
            ('click',myFunc);
            console.log("Event hav removed!");
        }
    )

///different type of events
var btn = document.getElementById('t-btn');
var btn = document.getElementById('box');
//click event
 //btn.addEventListener('click',typeofEvent1);
//double click event
 //btn.addEventListener('dbclick',typeofEvent1);
//mousedown
//btn.addEventListener('mousedown',typeofEvent1);
//btn.addEventListener('mouseenter',typeofEvent1);
//btn.addEventListener('mouseleave',typeofEvent1);

//btn.addEventListener('mouseover',typeofEvent1);

btn.addEventListener('mousemove',typeofEvent1);
function typeofEvent1(e){
    console.log("Event type :" +e.type);

    document.querySelector('#box h2').textContent ='Mouse X :' + e.offsetX + ' | Mouse Y :'+e.offsetY;

    document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetX+')';
}

