// Order button: change "Order Now" to "Ordered" when clicked
    document.addEventListener('DOMContentLoaded', function () {
        const orderButtons = document.querySelectorAll('.menu-items .item button');

        orderButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                if (button.textContent.trim() === 'Order Now') {
                    button.textContent = 'Ordered';
                    button.disabled = true; // optional: prevent ordering again
                }
            });
        });
    });