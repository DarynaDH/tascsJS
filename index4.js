 let value = document.getElementById('value');
 let bt = document.getElementById('b');
 let type = document.getElementById('type');

 bt.onclick = function getSeconds(){
    let v = value.value;
    let t = type.value;

    v = parseInt(v);

    if(t=='seconds'){
        console.log(v)
    }
    else if(t=='minutes'){
        console.log(v*60)
    }
    else if(t=='hours'){
        console.log(v*3600)
    }
    else {
        console.log("-1")
    };
    
    

    

 }
 