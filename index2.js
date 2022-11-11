 let input1 = document.getElementById('num1');
 let bt = document.getElementById('b');
 let input2 = document.getElementById('num2');
 let input3 = document.getElementById('num3');
 

 bt.onclick = function getNextNumber(){
    let a = input1.value;
    let b = input2.value;
    let c = input3.value;

    if(b<0){
        console.log(a)
    }

    else if(b>0){
        console.log(c)
    }

    else if(b==0){
        console.log(0)
    };

 }
 