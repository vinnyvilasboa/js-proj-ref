const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
console.log(colors.length)
//the idea is that it will flip through all these colors

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //callback
    //the randomNumber var that was passed into the color change now has a dynamic value that can change based on the function.9
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
  
    document.body.style.backgroundColor = colors[randomNumber]

    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    //returns a number between 0 and 1 times the number of items inside color ie 4 ex. 0.54 * 3
    return  Math.floor(Math.random() * colors.length);

}

