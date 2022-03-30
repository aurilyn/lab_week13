/* selects the specified class/element*/
const selectDiv = document.querySelector(".original-container")
const cloneDiv = document.querySelector(".copy-container")
const clearButton = document.querySelector("button")

selectDiv.addEventListener('click', (evt) => {
    /* the line below selects*/
    const whateverbeingcopied = evt.target.parentElement.outerHTML
    /* clones whatever is clicked */
    cloneDiv.insertAdjacentHTML("beforeend", whateverbeingcopied)
    /* stops you from cloning the whole div */
})


/* click button to clear stuff from copy container */

clearButton.addEventListener('click', (evt) =>{
    /* cloneDiv is location, innerhtml overwrites values inside clonediv */
    cloneDiv.innerHTML = "";
})