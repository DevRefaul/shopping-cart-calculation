document.getElementById('phone-count-minus').addEventListener('click', function () {
    phonePrice(false)
    subtotal()
})

document.getElementById('phone-count-plus').addEventListener('click', function () {
    phonePrice(true)
    subtotal()
})

