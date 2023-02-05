const control = document.getElementById("control")
control.innerHTML = "Changed"

const mySubmitFunction = (event) => {
    event.preventDefault();
    const input = document.getElementById("inputA")
    const result = document.getElementById("result")

    const data = input.value
    result.innerHTML = data

    return false
}