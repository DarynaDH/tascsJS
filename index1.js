
 let input1 = document.getElementById('num1');
 let bt1 = document.getElementById('b1');
 let input2 = document.getElementById('num2');
 

 bt1.onclick = function(){
    let a = input1.value;
    let b = input2.value;
    a = parseInt(a);
    b = parseInt(b);
    let c = a + b;

    c = parseInt(c);
    console.log(Math.pow(c, 2)); 
 }
 