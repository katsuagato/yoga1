const images = document.querySelectorAll(".gallery-img");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const closeBtn = document.getElementById("close");



images.forEach((img) => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;

    });

});



closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});



modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});



const reviewInput = document.getElementById("review-input");

const addReviewBtn = document.getElementById("add-review");

const reviewsSection = document.querySelector(".reviews");



let reviews = JSON.parse(localStorage.getItem("reviews")) || [];



function renderReviews() {

    document
        .querySelectorAll(".user-review")
        .forEach(review => review.remove());



    reviews.forEach(text => {

        const div = document.createElement("div");

        div.classList.add("review");

        div.classList.add("user-review");

        div.innerHTML = `<p>${text}</p>`;

        reviewsSection.appendChild(div);

    });

}



addReviewBtn.addEventListener("click", () => {

    const text = reviewInput.value.trim();

    if (text === "") return;



    reviews.push(text);



    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );



    reviewInput.value = "";



    renderReviews();

});



renderReviews();