console.log('hola estamos bien')

const technologys = document.getElementById("languages")
const div  = document.createElement("div")

const get = () => {
    fetch("../techLanguages.json")
    .then(res => res.json())
    .then(res => res.forEach(item => {
        technologys.innerHTML += `
        <img class="col-3 animate__animated animate__backInLeft" src=${item.icon} >
        `
    }))
    .catch(error => console.log(error))
}

function viewLang(){
    console.log("Hola Mundo les traigo los lenguajes");
    get()
  }
setTimeout(viewLang, 3000)






