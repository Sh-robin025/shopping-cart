// this function is working for item count and show beside price 

const increaseCount = (product, count) => {
    const productCount = document.getElementById(product + '-count');
    const countNumber = parseInt(productCount.value);
    // const countNumber = +productCount.value; // (instead of parseInt (+) sign is working same)
    // implement here product count
    if (count === 'plus' && countNumber < 10) {
        productCount.value = countNumber + 1;
    }
    if (count === 'minus' && countNumber > 0) {
        productCount.value = countNumber - 1;
    }

    // implement here product price
    if (product === 'phone') {
        productPrice = productCount.value * 1219;
    }
    if (product === 'case') {
        productPrice = productCount.value * 59;
    }
    document.getElementById(product + '-price').innerText = productPrice;

    totalCost();
}

// this function is working for in-total calculation with tax and total cost
const totalCost = () => {
    const phoneCount = countNumber('phone');
    const caseCount = countNumber('case');

    subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById("sub-total").innerText = '$ ' + subTotal;

    tax = Math.round(subTotal * .05);
    document.getElementById("tax-amount").innerText = '$ ' + tax;

    total = subTotal + tax;
    document.getElementById("grand-total").innerText = '$ ' + total;
}

// this function is working for get item count number for in-total calculate 
const countNumber = product => {
    const productCount = document.getElementById(product + '-count');
    const productInput = parseInt(productCount.value);
    return productInput;
}

const checkOut = () => {
    alert("low ballance");
}