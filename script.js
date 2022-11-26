//Dog API

//https://dog.ceo/api/breeds/image/random
//.then - Promises
//synchronous -stuff you dont have to wait for
console.log("run FIRST");

const dogImageDiv = document.getElementById("dogImage");
const dogButton = document.getElementById("dogButton");
//this takes 2 serconds
//always have to do .then
//asynchronous programming-stuff you have to wait for
const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    //1
    .then((response) => response.json())
    //2
    .then((json) => {
      dogImageDiv.innerHTML = `<img src ='${json.message}'height=300 width =300/>`;
    });
};
dogButton.onclick = () => getNewDog();
console.log("Run 3rd");
