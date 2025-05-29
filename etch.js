let choose=document.getElementById('size');
let colors=document.getElementById('random');
let eraser=document.getElementById('eraser');

let myContainer=document.getElementById('container');

let textChoose=document.createElement('p');
let textColors=document.createElement('p');
let textEraser=document.createElement('p');

choose.appendChild(textChoose);
colors.appendChild(textColors);
eraser.appendChild(textEraser);

textChoose.textContent='Lets\'s Start!';
textColors.textContent='Random Color';
textEraser.textContent='Erase all';

let num=16.00;
let wiHdt=400.00;
let myColor='black';
let isClicked=false;

choose.addEventListener('click', event=>{

    let num=prompt('How many squares per size do you want? Choose between 10-100.');

    if (num == null || num == "") {
        alert("User cancelled the prompt.");
    } else if (num < 10 || num > 100) {
        alert("The number is invalid.");
    } else {
        while (myContainer.firstChild) myContainer.firstChild.remove();
        create(num);
    }
});

create(num);

function create(num){

    for(let i=0; i<num**2; i++){
        
        let divs=document.createElement('div');
        divs.className='items';
        divs.style.color='';
        divs.style.width=Number(wiHdt/num) + 'px';
        divs.style.height=Number(wiHdt/num) + 'px';
        myContainer.appendChild(divs);

        document.body.addEventListener("mousedown", () => (isClicked = true));
        document.body.addEventListener("mouseup", () => (isClicked = false));

        divs.addEventListener('mouseover', event => {
            if(isClicked){
                event.target.style.backgroundColor = (myColor);
            }
        })
    }     
}

colors.addEventListener('click', event => {
    myColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    return myColor;
});


