let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/icon-binary-code.png'){
        myImage.setAttribute ('src', 'img/icon-anonymous.png');
    }
    else{
        myImage.setAttribute ('src', 'img/icon-binary-code.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Coding is coll,' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storageName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hackering is so cool,'+ storageName; 
}
myButton.onclick = function(){
    setUserName();
}
