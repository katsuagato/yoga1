const searchInput = document.getElementById("search");

const sortSelect = document.getElementById("sort");

const cards = Array.from(document.querySelectorAll(".card"));

const itemsPerPage = 2;

let currentPage = 1;



function renderCards() {

    const searchValue = searchInput.value.toLowerCase();

    let filteredCards = cards.filter(card => {

        const name = card.dataset.name.toLowerCase();

        return name.includes(searchValue);

    });



    const sortValue = sortSelect.value;



    filteredCards.sort((a, b) => {

        if (sortValue === "name") {

            return a.dataset.name.localeCompare(b.dataset.name);

        }

        if (sortValue === "time") {

            return a.dataset.time.localeCompare(b.dataset.time);

        }

    });



    cards.forEach(card => {

        card.style.display = "none";

    });



    const start = (currentPage - 1) * itemsPerPage;

    const end = start + itemsPerPage;



    filteredCards.slice(start, end).forEach(card => {

        card.style.display = "block";

    });

}



searchInput.addEventListener("input", () => {

    currentPage = 1;

    renderCards();

});



sortSelect.addEventListener("change", () => {

    currentPage = 1;

    renderCards();

});



document.getElementById("next").addEventListener("click", () => {

    const filteredCards = cards.filter(card => {

        return card.dataset.name
            .toLowerCase()
            .includes(searchInput.value.toLowerCase());

    });



    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);



    if (currentPage < totalPages) {

        currentPage++;

        renderCards();

    }

});



document.getElementById("prev").addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        renderCards();

    }

});



renderCards();