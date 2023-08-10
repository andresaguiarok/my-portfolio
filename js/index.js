const technologys = document.getElementById("languages")

function get() {
    fetch("../techLanguages.json")
        .then(res => res.json())
        .then(res => res.map(item => {
            technologys.innerHTML += `
        <img class="col-3 animate__animated animate__backInLeft animate__slower" src=${item.icon} >
        `
        }))
        .catch(error => console.log(error))
}

get()