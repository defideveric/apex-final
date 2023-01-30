import { apex } from "../../declarations/apex";

window.addEventListener("load", async function() {
    const currentAmount = await apex.checkBalance();
    update();
});


document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault()

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawl-amount").value);

    button.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length != 0) {
        await apex.topUp(inputAmount);
    }

    if (document.getElementById("withdrawl-amount").value.length != 0) {
        await apex.withdraw(outputAmount);
    }

    await apex.compound();


    update()

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawl-amount").value = "";


    button.removeAttribute("disabled");

});

async function update() {
    const currentAmount = await apex.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
}