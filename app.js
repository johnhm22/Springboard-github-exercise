function randomRGB(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// const h1 = document.querySelector('h1');

// setInterval(function(){
//     h1.style.color = randomRGB();
// },500);

const letters = document.querySelectorAll('.letter');



    const intervalId = setInterval(function(){
        for(let letter of letters){
        letter.style.color = randomRGB();
            };
    },1000);


