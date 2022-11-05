function verify() {
    let inputAge = document.querySelector("input").value;
    if (inputAge >= 18) {
        document.querySelector(".root").innerHTML = inputAge + " adelt"
    } else {
        document.querySelector(".root").innerHTML = inputAge + " not a adelt"
    }
}