// const bar =document.getElementById('bar'); 
// const nav =document.getElementById('navbar');  
// const close =document.getElementById('close'); 

// if (bar) { 
//     bar.addEventListener('click' , () => {
//             nav.classList.add('active');
//         })
    
// }

// if (close) { 
//     close.addEventListener('click' ,() => { 
//         nav.classList.remove('active');
//     })
    
// }
 document.addEventListener('DOMContentLoaded', function () {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

    if (close) {
        close.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    }
});
// Function to calculate total sum
function calculateTotal() {
    // Get all quantity input elements
    var quantityInputs = document.querySelectorAll('#cart tbody tr td:nth-child(5) input');
    
    var total = 0;
    // Loop through each quantity input element
    quantityInputs.forEach(function(quantityInput) {
        // Get the parent row
        var row = quantityInput.closest('tr');
        // Get the price and quantity
        var price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
        var quantity = parseInt(quantityInput.value);
        // Calculate subtotal for this row
        var subtotal = price * quantity;
        // Update subtotal in the row
        row.querySelector('td:nth-child(6)').textContent = '$ ' + subtotal.toFixed(2);
        // Add subtotal to total
        total += subtotal;
    });
    
    // Update total in the UI
    document.querySelector('#subtotal strong').textContent = '$ ' + total.toFixed(2);
}

// Call the function to calculate total on page load
window.onload = function() {
    calculateTotal();
    
    // Add event listeners to quantity input fields
    var quantityInputs = document.querySelectorAll('#cart tbody tr td:nth-child(5) input');
    quantityInputs.forEach(function(quantityInput) {
        quantityInput.addEventListener('input', calculateTotal);
    });
};

 



    document.addEventListener("DOMContentLoaded", function() {
        // Get all remove buttons
        var removeButtons = document.querySelectorAll("#cart .fa-times-circle");

        // Add click event listener to each remove button
        removeButtons.forEach(function(button) {
            button.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default action of the anchor link
                var row = this.closest("tr"); // Get the closest parent row of the clicked button
                row.remove(); // Remove the entire row from the cart
            });
        });
    });

                






