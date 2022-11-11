let hex="#12DD4F";
let rgb="rgb(122, 234, 150)"
let el="fdvfdb df "

function getRandomColor(){
    let div1=document.querySelector('.color1')
    let div2=document.querySelector('.color2')
    let div3=document.querySelector('.color3')
    div2.style.backgroundColor = rgb;
    div3.style.backgroundColor = el;


    if(div3.style.backgroundColor==el){
        console.log("-1")
    }
    else{console.log("Other wrong text")};

    if(div1.lenght>6){
        console.log("Too many characters")
    }
    else{
        div1.style.backgroundColor = hex;
    }
    
}

getRandomColor()