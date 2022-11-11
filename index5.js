let allIt = document.querySelectorAll('.item');
let a = allIt.length;

let allEl = document.querySelectorAll('.elem');
let b = allEl.length;

let bt = document.getElementById('b');
let i = document.getElementById('classN');




 bt.onclick = function getCountOfByClassName(){
    b = parseInt(b);
    a = parseInt(a);
    
    if(i=='item'){
        console.log(a)
    }

    else if(i=='elem'){
        console.log(b)
    }

    else {
       console.log(0)
    };

 }
 
