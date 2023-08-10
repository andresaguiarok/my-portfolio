const technologys = document.getElementById("languages")
const languages = []

function get() {
    fetch("./techLanguages.json")
        .then(res => res.json())
        .then(res => res.map(item => languages.push(item) ))
        .catch(error => console.log(error))
}
get()

setTimeout(() => {
    let div = document.createElement ("div");
    languages.forEach(item => {
        div.innerHTML += `
        <img class="col animate__animated animate__backInLeft animate__slower" src=${item.icon} >
        `
        technologys.append(div)
    })
  }, 1000);