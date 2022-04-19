const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
//since it needs to be 6 six different values, it will have to loop 6 times

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
        //the += just tajes whatever the string is or number and plugs it with whatever is on the right. 
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}