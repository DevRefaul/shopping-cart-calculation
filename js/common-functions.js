function phonePrice(value) {
    

    if (value === true) {
    
    const inputValue = document.getElementById('phone-count-input-field')
    const inputValueString = inputValue.value
    const inputValueNumber = parseInt(inputValueString)

    inputValue.value = inputValueNumber + 1

    const totalPhonePrice = document.getElementById('total-phone-price')
    
    const newTotalPrice = 1219 * inputValue.value
    totalPhonePrice.innerText = newTotalPrice


    } else {
        
    const inputValue = document.getElementById('phone-count-input-field')
    const inputValueString = inputValue.value
    const inputValueNumber = parseInt(inputValueString)


    inputValue.value = inputValueNumber - 1

    if (inputValue.value < 0) {
        alert('Cant enter a negative value')
        inputValue.value = 0
    } else {
        
    const totalPhonePrice = document.getElementById('total-phone-price')
    
    const newTotalPrice = 1219 * inputValue.value
    totalPhonePrice.innerText = newTotalPrice
    }

}

}

function totalCasePrce(event) {
    

    if (event === true) {
    
    const inputValue = document.getElementById('phone-case-input-field')
    const inputValueString = inputValue.value
    const inputValueNumber = parseInt(inputValueString)

    inputValue.value = inputValueNumber + 1

    const totalPhonePrice = document.getElementById('case-total-price')
    
    const newTotalPrice = 59 * inputValue.value
    totalPhonePrice.innerText = newTotalPrice


    } else {
        
            
    const inputValue = document.getElementById('phone-case-input-field')
    const inputValueString = inputValue.value
    const inputValueNumber = parseInt(inputValueString)


    inputValue.value = inputValueNumber - 1

    if (inputValue.value < 0) {
        alert('Cant enter a negative value')
        inputValue.value = 0
    } else {
    const totalPhonePrice = document.getElementById('case-total-price')
    
    const newTotalPrice = 59 * inputValue.value
        totalPhonePrice.innerText = newTotalPrice
        

    }


}


}

function subtotal() {
    

const totalPhonePrice = document.getElementById('total-phone-price')
const totalPhonePriceNumber = parseInt(totalPhonePrice.innerText)

const totalCasePrice = document.getElementById('case-total-price')
const totalCasePriceNumber = parseInt(totalCasePrice.innerText)

const subTotalAmount = totalPhonePriceNumber + totalCasePriceNumber

const subTotal = document.getElementById('subtotal')
subTotal.innerText = subTotalAmount

// tax amount section down

    const taxAmount = document.getElementById('tax')
    
    const newTaxAmount = subTotalAmount * .05
    const totalTax = newTaxAmount.toFixed(2)
    taxAmount.innerText = totalTax


// total bill section
    const totalBill = document.getElementById('total-bill')
    const totalTaxNumber = parseFloat(totalTax)
    const newTotalBill = subTotalAmount + totalTaxNumber

    totalBill.innerText = newTotalBill
    

}