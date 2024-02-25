// document.getElementById("b1").addEventListener("click", () => {
//     document.querySelector("p").style.color = 'red';
//     document.querySelector("p").style.fontSize = '30px';
// })
// document.getElementById("b1").addEventListener("dblclick", () => {
//     console.log("hi")
// })
// let counter = 0;
// let intervalId = setInterval(() => {
//     console.log(++counter)
//     if(counter >= 10) clearInterval(intervalId)
// },1000)

const currentDate = Date();
setInterval(() =>{
currentDate.setSeconds(60);
console.log(currentDate.setSeconds())
},1000)