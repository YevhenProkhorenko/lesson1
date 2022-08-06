const KEY = "913a4a4ff3d2419882a0bedfbdca1dbc";
const BASE_URL = "https://newsapi.org/v2";
const list = document.querySelector(".list")
fetch(`${BASE_URL}/top-headlines?country=ua&apiKey=${KEY}&category=health&pageSize=10`)
    .then((responce) => responce.json())
    .then((data) => insertContent(data.articles))
    .catch((error) => console.log("error", error));


const createListItem = (item) => 
    `<li>
    ${item.urlToImage ? `<img src="${item.urlToImage ? item.urlToImage: ""}" alt=${item.description ? item.description: ""}>`: ""}
        
        <h2>${item.title ? item.title: ""}</h2>
        <p>${item.description ? item.description: ""}</p>        
        <p>${item.author ? item.author: ""}</p>
        <a href="${item.url ? item.url: ""}" target="description">перейти до  статті</a>
    </li>`;


const generateContent = (array) => array?.reduce((acc, item) => acc + createListItem(item), "");


const insertContent = (array) => {
    const result = generateContent(array);
    list.insertAdjacentHTML("beforeend", result);
}  