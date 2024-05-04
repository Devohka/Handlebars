const card = document.querySelector(".card-list");
import cardCreate from "./template/cardCreate.handlebars";

const users = [
    {
        name: "User-1",
        year: 14,
        id: 1
    },
    {
        name: "User-2",
        year: 86,
        id: 2
    },
    {
        name: "User-3",
        year: 23,
        id: 3
    },
    {
        name: "User-4",
        year: 43,
        id: 4
    },
    {
        name: "User-5",
        year: 56,
        id: 5
    },
    {
        name: "User-6",
        year: 10,
        id: 6
    },
];




function createElement() {
    card.insertAdjacentHTML("beforeend", 
    cardCreate({users}));
};

createElement();