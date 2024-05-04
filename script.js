document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');
    const sizeInput = document.getElementById('size');
    const orderForm = document.getElementById('orderForm');

    // Modify HTML content
    shoeList.children[0].innerHTML += ' - Limited Edition!';
    
    // Modify CSS classes
    shoeList.children[1].classList.add('highlight');

    // Event listeners
    shoeList.addEventListener('click', function(event) {
        event.target.classList.toggle('highlight');
    });

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert(`Thank you for ordering! Your shoe size is: ${sizeInput.value}`);
        sizeInput.value = ''; // Clear input after submission
    });

    // BOM properties/methods
    console.log(`Window width: ${window.innerWidth}`);
    console.log(`User Agent: ${navigator.userAgent}`);
    
    // Form validation
    sizeInput.addEventListener('input', function(event) {
        if (sizeInput.validity.rangeUnderflow || sizeInput.validity.rangeOverflow) {
            sizeInput.setCustomValidity('Please select a size between 1 and 15');
        } else {
            sizeInput.setCustomValidity('');
        }
    });
});

// Cache at least one element using querySelector or querySelectorAll
document.addEventListener('DOMContentLoaded', function() {
    // Cache element using querySelector
    const orderForm = document.querySelector('#orderForm');


// Cache one element using SelectElementByID
document.addEventListener('DOMContentLoaded', function() {
// Cache element using getElementById
    const shoeList = document.getElementById('shoeList');

    // Modify HTML content
    shoeList.children[0].innerHTML += ' - Limited Edition!';
// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.)
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');
    
    // Access parent, child, and sibling elements
    const firstShoe = shoeList.firstChild;
    const lastShoe = shoeList.lastChild;
    const parentOfFirstShoe = firstShoe.parentNode;
    const nextShoe = firstShoe.nextElementSibling;
// * Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');

    // Event listener to modify text content
    shoeList.addEventListener('click', function(event) {
        if (event.target.classList.contains('shoeName')) {
            event.target.textContent += ' - Sold Out'; // Modify text content
        }
    });
});

// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');

    // Event listener to modify style
    shoeList.addEventListener('click', function(event) {
        if (event.target.classList.contains('shoeName')) {
            event.target.style.backgroundColor = 'yellow'; // Change background color
        }
    });
});

// * Register at least two different event listeners and create the associated event handler functions.
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');
    const orderForm = document.getElementById('orderForm');
    const sizeInput = document.getElementById('size');

    // Event listener to modify style
    shoeList.addEventListener('click', function(event) {
        if (event.target.classList.contains('shoeName')) {
            event.target.style.backgroundColor = 'yellow'; // Change background color
        }
    });

    // Event listener for form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const shoeSize = sizeInput.value;
        if (shoeSize >= 1 && shoeSize <= 15) {
            alert(`Thank you for your order! Your shoe size is ${shoeSize}.`);
        } else {
            alert('Please select a shoe size between 1 and 15.');
        }
    });
});

// Use at least two Browser Object Model (BOM) properties or methods.
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');
    const orderForm = document.getElementById('orderForm');
    const sizeInput = document.getElementById('size');

    // Event listener to modify style
    shoeList.addEventListener('click', function(event) {
        if (event.target.classList.contains('shoeName')) {
            event.target.style.backgroundColor = 'yellow'; // Change background color
        }
    });

    // Event listener for form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const shoeSize = sizeInput.value;
        if (shoeSize >= 1 && shoeSize <= 15) {
            alert(`Thank you for your order! Your shoe size is ${shoeSize}.`);
        } else {
            alert('Please select a shoe size between 1 and 15.');
        }
    });

    // BOM properties/methods
    console.log(`Window width: ${window.innerWidth}`); // Get the width of the browser window
    console.log(`User Agent: ${navigator.userAgent}`); // Get information about the user's browser
});

// nclude at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');
    const orderForm = document.getElementById('orderForm');
    const sizeInput = document.getElementById('size');
    const sizeError = document.getElementById('sizeError');

    // Event listener for form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const shoeSize = sizeInput.value;
        if (shoeSize >= 1 && shoeSize <= 15) {
            alert(`Thank you for your order! Your shoe size is ${shoeSize}.`);
        } else {
            sizeError.style.display = 'block'; // Display error message
        }
    });

    // Event listener for input validation
    sizeInput.addEventListener('input', function() {
        if (sizeInput.validity.valid) {
            sizeError.style.display = 'none'; // Hide error message
        }
    });
});

// Iterate over a collection of elements to accomplish some task.
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const shoeList = document.getElementById('shoeList');

    // Iterate over the shoe list and add a class to each shoe name
    const shoes = shoeList.querySelectorAll('.shoeName');
    shoes.forEach(function(shoe) {
        shoe.classList.add('highlight'); // Add class to each shoe name
    });
});
