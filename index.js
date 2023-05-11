//RESUELVE TUS EJERCICIOS AQUI

// Ejercicio 1

function getAllBreeds() {

    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => Object.keys(data.message))
    .catch(error => console.log(error))
}

// Ejercicio 2

function getRandomDog() {

    return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => console.log(error))
}

// Ejercicio 3

function getAllImagesByBreed(dog) {
    return fetch(`https://dog.ceo/api/breed/${dog}/images`)
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => console.log(error))
}

// Ejercicio 4

function getAllImagesByBreed2(dog) {
    return fetch(`https://dog.ceo/api/breed/${dog}/images`)
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => console.log(error))
}

// Ejercicio 5

function getGitHubUserProfile(gitUser) {
    return fetch(`https://api.github.com/users/${gitUser}`)
    .then(res => res.json())
    .then(user => user)
    .catch(error => console.log(error))
}

// Ejercicio 6

function printGithubUserProfile(gitUser) {
    return fetch(`https://api.github.com/users/${gitUser}`)
    .then(res => res.json())
    .then(userData => {
        document.querySelector("main").innerHTML += `<img src=${userData.avatar_url}> <p>${userData.name}</p>`
        return {img: userData.avatar_url, name: userData.name}
    })
    .catch(error => error)
}

// Ejercicio 7

function getAndPrintGitHubUserProfile(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => `<section>
    <img src="${user.avatar_url}" alt="${user.name}">
    <h1>${user.name}</h1>
    <p>Public repos: ${user.public_repos}</p>
</section>`)
    .catch(error => console.log(error))
}

// Ejercicio 8

function fetchGithubUsers(users) {
    let gitHubUsers = users.map(user => {
        return fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .catch(err => console.log(`ERROR: ${err}`))
    });
    return Promise.all(gitHubUsers)
    .then(res => {
        return res.map(val => {
            return console.log(val.name)
            console.log(val.html_url)
            console.log(val.name)
        })
    })
    .catch(err => console.log(err))
}

console.log(fetchGithubUsers(["santivediap", "becabecks3", "Radu-A"]));