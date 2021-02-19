console.log('I am in a separate file')

function increasePhoneCount() {
    const phoneCountElement = document.getElementById('phone-count');
    const phoneCount = phoneCountElement.value;
    const newPhoneCount = parseInt(phoneCount) + 1;
    phoneCountElement.value = newPhoneCount;
    updatePhonePrice();
}

function decreasePhoneCount() {
    const phoneCountElement = document.getElementById('phone-count');
    const phoneCount = phoneCountElement.value;
    const newPhoneCount = parseInt(phoneCount) - 1;
    phoneCountElement.value = newPhoneCount;
    updatePhonePrice();
}

function updatePhonePrice() {
    const phoneCountElement = document.getElementById('phone-count');
    const phoneCount = phoneCountElement.value;
    const phonePrice = parseInt(phoneCount) * 1219;
    const phonePriceElement = document.getElementById('phone-price');
    phonePriceElement.innerText = '$' + phonePrice;
    updateTotalPrice();
}

function increaseCaseCount() {
    const phoneCountElement = document.getElementById('case-count');
    const phoneCount = phoneCountElement.value;
    const newPhoneCount = parseInt(phoneCount) + 1;
    phoneCountElement.value = newPhoneCount;
    updateCasePrice();
}

function decreaseCaseCount() {
    const phoneCountElement = document.getElementById('case-count');
    const phoneCount = phoneCountElement.value;
    const newPhoneCount = parseInt(phoneCount) - 1;
    phoneCountElement.value = newPhoneCount;
    updateCasePrice();
}

function updateCasePrice() {
    const phoneCountElement = document.getElementById('case-count');
    const phoneCount = phoneCountElement.value;
    const phonePrice = parseInt(phoneCount) * 59;
    const phonePriceElement = document.getElementById('case-price');
    phonePriceElement.innerText = '$' + phonePrice;
    updateTotalPrice();
}

function updateTotalPrice() {
    const phoneCount = document.getElementById('phone-count').value;
    const caseCount = document.getElementById('case-count').value;

    const totalPrice = parseInt(phoneCount) * 1219 + parseInt(caseCount) * 59;

    // const taxAmount = (totalPrice / 100 * 10).toFixed(2);
    const taxAmount = Math.round(totalPrice * .10);
    const grandTotal = totalPrice + parseFloat(taxAmount);

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = '$' + totalPrice;
    const taxElement = document.getElementById('tax-amount');
    taxElement.innerText = '$' + taxAmount;
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.innerText = '$' + grandTotal;
}