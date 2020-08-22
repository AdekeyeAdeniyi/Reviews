// app.js

const identity =[
    {
        id: 1,
        imgUrl: "./imgs/avatar-2.jpg",
        name: "Sarah Jones",
        job: "UI Engineer",
        info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
    },
    {
        id: 2,
        imgUrl: "./imgs/avatar-1.jpg",
        name: "Susan Smith",
        job: "Web Developer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
    },
    {
        id: 3,
        imgUrl: "./imgs/avatar-2.jpg",
        name: "Anna Johnson",
        job: "Java Programmer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
    },
    {
        id: 4,
        imgUrl: "./imgs/avatar-3.jpg",
        name: "Peter Jones",
        job: "Intern",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
    },
    {
        id: 5,
        imgUrl: "./imgs/avatar-1.jpg",
        name: "Bill Anderon",
        job: "The Boss",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
        text:""
    },
    {
        id: 6,
        imgUrl: "./imgs/avatar-3.jpg",
        name: "Mike Edison",
        job: "Manager",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
    },
    {
        id: 7,
        imgUrl: "./imgs/avatar-1.jpg",
        name: "Mariam Ahmad",
        job: "Assisstant",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur tenetur non illo, laborum quam dolorum aut quos doloribus!.",
    },
];

const id = document.querySelector(".avatar");
const img = document.querySelector(".avatarimg");
const name = document.querySelector(".avatar-name");
const job = document.querySelector(".avatar-job");
const info = document.querySelector(".avatar-info");

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const randomBtn = document.querySelector(".btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    displayCurrent(currentItem);   
})

let displayCurrent = (val)=>{
    const item = identity[val];

    id.dataset.id = item.id;
    img.src = item.imgUrl; 
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

nextBtn.addEventListener("click", ()=>{
    currentItem ++;
    if(currentItem > identity.length - 1){
        currentItem = 0;
    }
    displayCurrent(currentItem);
});

previousBtn.addEventListener("click", ()=>{
    currentItem --;
    if(currentItem < 0){
        currentItem = identity.length - 1;
    }
    displayCurrent(currentItem);
});

randomBtn.addEventListener("click", ()=>{
    let id = Math.floor(Math.random() * identity.length);

    displayCurrent(id);
});




