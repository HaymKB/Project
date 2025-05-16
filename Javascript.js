console.log("hi");

const searchBar = document.querySelector("#search");
const projects = document.querySelectorAll(".card");

function search(input) {
    let cardArr = [...projects];
    // Display all the cards again before filtering. This will allow updates with backspaces
    cardArr.forEach((project) => {
        project.style.display = "block";
    });

    // Search for cards with textContent = input arguement
    let filteredCards = cardArr.filter((project) => project.firstElementChild.textContent.toLowerCase().includes(input));
    cardArr.forEach((project) => {
        if(!filteredCards.includes(project)) {
            project.style.display = "none";
        }
    })
}


searchBar.addEventListener("input", (event) => {
    let val = event.target.value;
    search(val);
})
