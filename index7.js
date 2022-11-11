let ul = document.createElement('ul');
document.body.appendChild(ul);
let b = document.getElementById("b");



b.onclick = function generateListOfNumber(){
    let textValue1 = document.getElementById("i1").value;
    let textValue2 = document.getElementById("i2").value;
    let textValue3 = document.getElementById("i3").value;
    let li = document.createElement('li');
    ul.appendChild(li);

    if(textValue1>textValue2){
        li.innerHTML = ("Wrong numbers *_*" );
    }
    else if(textValue3<=0){
        li.innerHTML = ("Wrong step *_*" );
    }
    else{
        li.innerHTML = ("("+textValue1 + " ," + textValue2 +" ,"+ textValue3 +")" )
    }
    
    
}