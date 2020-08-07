
const mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];// hard-coded 9 boxes data
const shuffle = (array) => array.sort(() => Math.random() - 0.5); // shuffles array of items 
// const suffle = document.getElementById('shuffle');
// const sort = document.getElementById('sort');
// shuffle.addEventListener("click", onSuffle);
// sort.addEventListener("click", onSort);
document.getElementById('shuffle').addEventListener('click', onSuffle);
document.getElementById('sort').addEventListener('click', onSort)
function onSuffle() { // on click on suffle button
    const suffleArr = shuffle([...mainArray]);
    console.log(suffleArr);
    displayBoxes(suffleArr);
}
function onSort() {
    console.log(mainArray);
    displayBoxes(mainArray);
}
function displayBoxes(boxArray) {
    let boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";
    boxArray.forEach((element) => {
        const div = `<div class="box">${element}</div>`;
        boxContainer.innerHTML += div;
    });
}
displayBoxes(mainArray);