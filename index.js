const selectRating = () => {
    const number = document.querySelectorAll(".number");
    const selectedNumber = document.querySelector(".number.selected")

    number.forEach((number) => {
        number.addEventListener("click", event => {
            document.querySelector(".number.selected").classList.remove("selected");
            event.currentTarget.classList.add("selected");
    })
    
})
}

selectRating()

const submitScore = () => {
const submitButton = document.querySelector("#submit");
const ratingBox = document.querySelector("#rating-state-container");
const tyBox = document.querySelector("#ty-container");

submitButton.addEventListener("click", () => {
    console.log('submitted')
    ratingBox.classList.add("hidden")
    tyBox.classList.remove("hidden")
    const populateScore = () => {
        score = document.querySelector(".number.selected").textContent
        const message = document.querySelector("#result")
        console.log(score)
        return message.textContent = `You selected ${score} out of 5`
   }
   populateScore()
})
}

submitScore()
 
