let colors = [
    'rgb(122, 100, 150)', 'rgb(200, 234, 150)',
    'rgb(122, 234, 50)', '#14DD4F',
    '#20DD5F', '#12DD4F', ];

function changeColor(){

        let i = colors[Math.floor(Math.random()*colors.length)]
        console.log(i)
        document.querySelector('.random-color').backgroundColor.colors = colors[Math.floor(Math.random()*colors.length)];

       

 }