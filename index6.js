let b = document.getElementById("b1");
let i = document.querySelector('#id').value;
//let i = input.value;
 


b.onclick = function setInnerText(){
    

    if(i=='h2'){
        document.getElementById("h2").innerText = "New text!";
        console.log("True")
    }

    else if(i=='h4'){
        document.getElementById("h4").innerText = "New text!";
        console.log("True")
    }

    else {
        console.log("False") 
    };

 }