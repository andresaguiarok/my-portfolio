const stackFront = document.getElementById("front-end")
const stackBack = document.getElementById("back-end")

function getFront() {
    fetch("./techFront.json")
        .then(res => res.json())
        .then(res => res.map(item => stackFront.innerHTML += `
        <img class="col-3 animate__animated animate__backInLeft animate__slow" src=${item.icon} >
        `))
        .catch(error => console.log(error))
}

function getBack() {
    fetch("./techBack.json")
        .then(res => res.json())
        .then(res => res.map(item => stackBack.innerHTML += `
        <img class="col-3 animate__animated animate__backInLeft animate__slower" src=${item.icon} >
        `))
        .catch(error => console.log(error))
}
getFront()
getBack()
