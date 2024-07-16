// API

const API_URL = "https://jsonplaceholder.typicode.com";
const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");

async function fetchUsers(api) {
    let apiUsers = await fetch(`${api}/posts`);

    apiUsers
        .json()
        .then((res) => createCard(res))
        .catch((err) => console.log(err))
        .finally(() => {
            loading.style.display = "none";
        });
}

fetchUsers(API_URL);

const IMAGES = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/300/200",
];

let random = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const card = document.querySelector(".card");

function createCard(data) {
    data.forEach((user, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${random}" alt="">
        <h3>${user.id}</h3>
        <h2>${user.title}</h2>
        <p>${user.body}</p>
        `;
        wrapper.appendChild(card);
    });
}
