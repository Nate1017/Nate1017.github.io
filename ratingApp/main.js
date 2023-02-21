const mainContainer = document.querySelector(".ratingCard")
const thanksContainer = document.querySelector(".thankYou")

const submitBtn = document.getElementById("submitBtn")
const rateBtn = document.getElementById("rateBtn")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
});

rateBtn.addEventListener("click", () =>{
    mainContainer.style.display = "block"
    thanksContainer.classList.add("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})