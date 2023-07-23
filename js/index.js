console.log('hola estamos bien')

const technologys = document.getElementById("languages")

function get() {
    fetch("../techLanguages.json")
        .then(res => res.json())
        .then(res => res.forEach(item => {
            technologys.innerHTML += `
        <img class="col-3 animate__animated animate__backInLeft" src=${item.icon} >
        `
        }))
        .catch(error => console.log(error))
}

get()






