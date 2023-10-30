const quantityInputs = document.querySelectorAll(".quantity-input");
const checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", () => {
    let totalCost = 0;

    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value, 10);
        const cost = parseFloat(input.parentElement.previousElementSibling.textContent.slice(1));
        totalCost += quantity * cost;
    });

    alert(`Total cost: $${totalCost.toFixed(2)}`);
});
