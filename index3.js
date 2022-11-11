 let input1 = document.getElementById('num1');
 let bt = document.getElementById('b');
 let input2 = document.getElementById('num2');
 let input3 = document.getElementById('num3');
 

 bt.onclick = function getTriangleSquare(){
    let a = input1.value;
    let b = input2.value;
    let c = input3.value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    let d = a + b + c;
    let p = d/2;

    d = parseInt(d);
    p = parseInt(p);

    let e = p - a;
    e = parseInt(e);
    let f = p - b;
    f = parseInt(f);
    let g = p - c;
    g = parseInt(g);

    let h = p * e * f * g;
    h = parseInt(h);
    




    console.log(Math.sqrt(h));




}
