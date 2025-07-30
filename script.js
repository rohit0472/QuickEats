let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("hero");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000);

}    

function balram()
{
    let jat = document.getElementById('jat');
    let choudhary = document.getElementById('choudhary');
    choudhary.style.display='none';
    jat.style.display='none';
    jat.style.display='none';
    let a = document.getElementById('balram');
    let input= a.value.toUpperCase();
    let h = document.querySelectorAll('#menuItems h3');
    const menuItems = document.querySelectorAll('.menu-item');
    found = false;

    if(input.length==0)
    {
        choudhary.style.display='block';
        jat.style.display='block';
    }
    
    for(i=0;i<h.length;i++)
    {
        let text = h[i].textContent.toUpperCase();
        if(text.indexOf(input)>-1)
        {
           menuItems[i].style.display='block'; 
           found = true;
        }
        else
        {
            menuItems[i].style.display='none'; 
        }

       document.getElementById('noResults').style.display= found ? 'none' : 'block';
    }
}

const menuItems = [
    {
        id: 1,
        title: "Paneer Tikka",
        price: 746,
        description: "Chunks of paneer marinated in spices and grilled to perfection.",
        category: "appetizer",
        image: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76793.jpg"
    },
    {
        id: 2,
        title: "Veg Samosa",
        price: 580,
        description: "Crispy pastry filled with spicy mashed potatoes and peas.",
        category: "appetizer",
        image: "https://img.freepik.com/premium-photo/veg-samosa-is-crispy-spicy-indian-triangle-shape-snack-which-has-crisp-outer-layer-maida-filling-mashed-potato-peas-spices_466689-72924.jpg"
    },
    {
        id: 3,
        title: "Butter Chicken",
        price: 1244,
        description: "Tender chicken cooked in a creamy tomato gravy with Indian spices.",
        category: "main",
        image: "https://img.freepik.com/premium-photo/traditional-indian-butter-chicken-murg-makhanwala-which-is-creamy-main-course-curry-recipe_466689-49705.jpg"
    },
    {
        id: 4,
        title: "Paneer Butter Masala",
        price: 1161,
        description: "Soft paneer cubes in a rich buttery tomato-based sauce.",
        category: "main",
        image: "https://img.freepik.com/premium-photo/paneer-butter-masala-cheese-cottage-curry_466689-49694.jpg"
    },
    {
        id: 5,
        title: "Hyderabadi Biryani",
        price: 1410,
        description: "Fragrant basmati rice layered with marinated meat and aromatic spices.",
        category: "main",
        image: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52414.jpg"
    },
    {
        id: 6,
        title: "Chole Bhature",
        price: 995,
        description: "Spicy chickpea curry served with deep-fried fluffy bread.",
        category: "main",
        image: "https://img.freepik.com/premium-photo/chole-bhature-is-north-indian-food-dish-combination-chana-masala-bhatura-puri_1165532-77805.jpg"
    },
    {
        id: 7,
        title: "Gulab Jamun",
        price: 497,
        description: "Soft fried dough balls soaked in rose-flavored sugar syrup.",
        category: "dessert",
        image: "https://img.freepik.com/premium-photo/gulab-jamun-gulabjamun-is-indian-sweet-served-bowl-as-pile-closeup-view_466689-89343.jpg"
    },
    {
        id: 8,
        title: "Rasmalai",
        price: 580,
        description: "Creamy saffron-flavored milk with soft cottage cheese patties.",
        category: "dessert",
        image: "https://img.freepik.com/premium-photo/angoori-rasmalai-is-indian-dessert-sweet-with-dry-fruits-saffron-toppings-served-bowl-moody-background-selective-focus_466689-72204.jpg"
    },
    {
        id: 9,
        title: "Masala Chai",
        price: 331,
        description: "Aromatic spiced Indian tea with milk and sugar.",
        category: "drink",
        image: "https://img.freepik.com/free-photo/cup-coffee-with-cinnamon-sticks-marble-background-high-quality-photo_114579-37665.jpg?semt=ais_country_boost&w=740"
    },
    {
        id: 10,
        title: "Mango Lassi",
        price: 414,
        description: "Cool and creamy yogurt drink blended with mango pulp.",
        category: "drink",
        image: "https://images.slurrp.com/prodrich_article/crsltu8v0nc.webp?impolicy=slurrp-20210601&width=880&height=500"
    }
];

// Time slots for reservation
const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "1:00 PM", "1:30 PM", "2:00 PM", "5:00 PM", 
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
];

// Cart data
let cart = [];
let reservationData = null;

// DOM Elements
const menuItemsContainer = document.getElementById('menuItems');
const timeSlotsContainer = document.getElementById('timeSlots');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const overlay = document.getElementById('overlay');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const paymentPage = document.getElementById('paymentPage');
const backToHome = document.getElementById('backToHome');
const reservationForm = document.getElementById('reservationForm');
const filterButtons = document.querySelectorAll('.filter-btn');
const selectedTimeInput = document.getElementById('selectedTime');

// Initialize the app
function init() {
    renderMenuItems();
    renderTimeSlots();
    setupEventListeners();
    loadCartFromLocalStorage();
    updateCartUI();
}

// Render menu items
function renderMenuItems() {
    menuItemsContainer.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = `menu-item ${item.category}`;
        menuItemElement.dataset.category = item.category;
        menuItemElement.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <h3 class="monika">${item.title}</h3>
                    <span class="menu-item-price">₹${item.price.toFixed(1)}</span>
                </div>
                <p class="menu-item-desc">${item.description}</p>
                <div class="add-to-cart">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="quantity" value="1" data-id="${item.id}" readonly>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="add-btn" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    });
}

// Render time slots
function renderTimeSlots() {
    timeSlotsContainer.innerHTML = '';
    
    timeSlots.forEach(time => {
        const timeSlotElement = document.createElement('div');
        timeSlotElement.className = 'time-slot';
        timeSlotElement.textContent = time;
        timeSlotElement.dataset.time = time;
        timeSlotElement.addEventListener('click', () => selectTimeSlot(timeSlotElement, time));
        timeSlotsContainer.appendChild(timeSlotElement);
    });
}

// Select time slot
function selectTimeSlot(element, time) {
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedTimeInput.value = time;
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);
    
    // Checkout button
    checkoutBtn.addEventListener('click', proceedToCheckout);
    
    // Back to home from payment page
    backToHome.addEventListener('click', () => {
        paymentPage.style.display = 'none';
        document.querySelector('header').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            filterMenuItems(filter);
        });
    });
    
    // Reservation form submission
    reservationForm.addEventListener('submit', handleReservationSubmit);
    
    // Add to cart buttons (delegated)
    menuItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn')) {
            const itemId = parseInt(e.target.dataset.id);
            const quantityInput = document.querySelector(`.quantity[data-id="${itemId}"]`);
            const quantity = parseInt(quantityInput.value);
            addToCart(itemId, quantity);
        }
        
        // Quantity controls
        if (e.target.classList.contains('plus')) {
            const itemId = parseInt(e.target.dataset.id);
            const quantityInput = document.querySelector(`.quantity[data-id="${itemId}"]`);
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
        
        if (e.target.classList.contains('minus')) {
            const itemId = parseInt(e.target.dataset.id);
            const quantityInput = document.querySelector(`.quantity[data-id="${itemId}"]`);
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        }
    });
    
    // Cart item controls (delegated)
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const itemId = parseInt(e.target.dataset.id);
            removeFromCart(itemId);
        }
        
        if (e.target.classList.contains('increase-quantity')) {
            const itemId = parseInt(e.target.dataset.id);
            updateCartItemQuantity(itemId, 1);
        }
        
        if (e.target.classList.contains('decrease-quantity')) {
            const itemId = parseInt(e.target.dataset.id);
            updateCartItemQuantity(itemId, -1);
        }
    });
}

// Toggle cart visibility
function toggleCart() {
    cartModal.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Filter menu items
function filterMenuItems(filter) {
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add item to cart
function addToCart(itemId, quantity) {
    const item = menuItems.find(i => i.id === itemId);
    
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: quantity,
            image: item.image
        });
    }
    
    saveCartToLocalStorage();
    updateCartUI();
    showAddedToCartMessage(item.title);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToLocalStorage();
    updateCartUI();
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCartToLocalStorage();
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-message">Your cart is empty</div>';
    } else {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}" width="50">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(1)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                </div>
                <div class="remove-item" data-id="${item.id}">×</div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Show "added to cart" message
function showAddedToCartMessage(itemName) {
    const message = document.createElement('div');
    message.className = 'added-to-cart-message';
    message.textContent = `${itemName} added to cart!`;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 2000);
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to proceed.');
        return;
    }
    
    // Hide header and footer
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    
    // Show payment page
    paymentPage.style.display = 'block';
    
    // Close cart
    toggleCart();
    
    // Save order data (simulating export to Excel)
    saveOrderData();
}

// Handle reservation form submission
function handleReservationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(reservationForm);
    const reservation = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        guests: formData.get('guests'),
        time: formData.get('selectedTime'),
        specialRequests: formData.get('special-requests'),
        createdAt: new Date().toISOString()
    };
    
    reservationData = reservation;
    
    // Save reservation data (simulating export to Excel)
    saveReservationData();
    
    // Show success message
    alert(`Table booked successfully for ${reservation.guests} people on ${reservation.date} at ${reservation.time}. A confirmation has been sent to ${reservation.email}.`);
    
    // Reset form
    reservationForm.reset();
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    selectedTimeInput.value = '';
}

// Save cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from local storage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save order data to Google Sheets
function saveOrderData() {
    const order = {
        sheet: 'Orders',
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };
    
    // Replace with your web app URL
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbz1UpaDTfyzK7IFHKay8tNwEQHDBGQtB3yEzxNUpmiI4C00Pp3FLiLwisB0BiIoL4MVFg/exec';
    
    fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order) // Use the order object we created
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Order saved to Google Sheets:', data);
        // Clear cart after successful submission
        cart = [];
        saveCartToLocalStorage();
        updateCartUI();
    })
    .catch(error => {
        console.error('Error saving order:', error);
        alert('Failed to save order. Please try again.');
    });
}

// Save reservation data to Google Sheets
function saveReservationData() {
    const reservation = {
        sheet: 'Reservations',
        name: reservationData.name,
        email: reservationData.email,
        phone: reservationData.phone,
        date: reservationData.date,
        time: reservationData.time,
        guests: reservationData.guests,
        specialRequests: reservationData.specialRequests || '',
        createdAt: new Date().toISOString()
    };
    
    // Replace with your web app URL
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbz1UpaDTfyzK7IFHKay8tNwEQHDBGQtB3yEzxNUpmiI4C00Pp3FLiLwisB0BiIoL4MVFg/exec';
    
    fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation) // Use the reservation object we created
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Reservation saved to Google Sheets:', data);
    })
    .catch(error => {
        console.error('Error saving reservation:', error);
        alert('Failed to save reservation. Please try again.');
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);