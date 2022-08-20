document.getElementById('phone-case-count-minus').addEventListener('click', function () {
    totalCasePrce(false)
    subtotal()

})

document.getElementById('phone-case-count-plus').addEventListener('click', function () {
    totalCasePrce(true)
    subtotal()

})
