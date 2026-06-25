const cards = document.querySelectorAll(".type-card");

const mainImage = document.getElementById("main-image");

const description = document.getElementById("training-description");



cards.forEach((card) => {

    card.addEventListener("click", () => {

        const image = card.getAttribute("data-image");

        const text = card.getAttribute("data-text");



        mainImage.src = image;

        description.textContent = text;

    });

});