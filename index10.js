

let fontFamilies = [
    'Arial', 'Times New Roman',
    'Verdana', 'Brush Script MT',
    'Tahoma', 'Garamond', ];

function changeStyle(){

        let i = fontFamilies[Math.floor(Math.random()*fontFamilies.length)]
        console.log(i)
        document.querySelector('.random-font').style.fontFamily = fontFamilies[Math.floor(Math.random()*fontFamilies.length)];

       

 }