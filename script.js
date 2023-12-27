const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url =
        `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=HoRDrk33Fx50Owr37gCrao3qbjuKX5OBV8byj2RXetU`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});

const dynamicText = document.getElementById("dynamic-text");
const categories = ["Animals", "Planets", "Nature", "Snow", "Technology", "Food", "Indian", "Trees", "Clothes", "Huts"]

let categoryIndex = 0;
function changeCategory() {
    dynamicText.textContent = categories[categoryIndex];
    categoryIndex = (categoryIndex + 1) % categories.length;
}
changeCategory();
setInterval(changeCategory, 2000);