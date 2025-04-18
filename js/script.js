// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Add CSS class to nav when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Flash Deals Countdown Timer
function updateCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    let hours = parseInt(hoursElement.innerText);
    let minutes = parseInt(minutesElement.innerText);
    let seconds = parseInt(secondsElement.innerText);
    
    seconds--;
    
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        
        if (minutes < 0) {
            minutes = 59;
            hours--;
            
            if (hours < 0) {
                // Reset countdown when it reaches zero
                hours = 23;
                minutes = 59;
                seconds = 59;
            }
        }
    }
    
    hoursElement.innerText = hours < 10 ? `0${hours}` : hours;
    minutesElement.innerText = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.innerText = seconds < 10 ? `0${seconds}` : seconds;
}

// Update countdown every second if timer elements exist
if (document.getElementById('hours')) {
    setInterval(updateCountdown, 1000);
}

// Flash Deals Slider Products
const dealsProducts = [
    {
        name: 'Elite Soccer Cleats',
        currentPrice: '2,499',
        originalPrice: '3,999',
        image: 'images/products/cleats.jpg',
        badge: 'Sale',
        rating: 4.5,
        reviews: 38
    },
    {
        name: 'Training Resistance Bands Set',
        currentPrice: '999',
        originalPrice: '1,499',
        image: 'images/products/bands.jpg',
        badge: 'Hot',
        rating: 4.8,
        reviews: 52
    },
    {
        name: 'Cricket Helmet',
        currentPrice: '1,799',
        originalPrice: '2,599',
        image: 'images/products/helmet.jpg',
        badge: 'Sale',
        rating: 4.7,
        reviews: 29
    },
    {
        name: 'Premium Yoga Mat',
        currentPrice: '899',
        originalPrice: '1,299',
        image: 'images/products/yoga-mat.jpg',
        badge: 'New',
        rating: 4.6,
        reviews: 45
    },
    {
        name: 'Sports Water Bottle',
        currentPrice: '399',
        originalPrice: '599',
        image: 'images/products/bottle.jpg',
        badge: 'Hot',
        rating: 4.3,
        reviews: 67
    }
];

// Populate Flash Deals section
const populateDealsSlider = () => {
    const dealsSlider = document.querySelector('.deals-slider');
    if (!dealsSlider) return;
    
    dealsProducts.forEach(product => {
        // Create product card
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Add badge if exists
        if (product.badge) {
            const badge = document.createElement('div');
            badge.className = 'product-badge';
            badge.textContent = product.badge;
            productCard.appendChild(badge);
        }
        
        // Create product image section
        const productImage = document.createElement('div');
        productImage.className = 'product-image';
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        productImage.appendChild(img);
        
        // Create product actions
        const productActions = document.createElement('div');
        productActions.className = 'product-actions';
        
        ['heart', 'shopping-cart', 'eye'].forEach(icon => {
            const button = document.createElement('button');
            button.className = `btn-${icon === 'heart' ? 'wishlist' : icon === 'shopping-cart' ? 'cart' : 'view'}`;
            button.innerHTML = `<i class="fas fa-${icon}"></i>`;
            productActions.appendChild(button);
        });
        
        productImage.appendChild(productActions);
        productCard.appendChild(productImage);
        
        // Create product info
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        
        const title = document.createElement('h3');
        title.textContent = product.name;
        productInfo.appendChild(title);
        
        const priceDiv = document.createElement('div');
        priceDiv.className = 'product-price';
        
        const currentPrice = document.createElement('span');
        currentPrice.className = 'current-price';
        currentPrice.textContent = `₹${product.currentPrice}`;
        priceDiv.appendChild(currentPrice);
        
        const originalPrice = document.createElement('span');
        originalPrice.className = 'original-price';
        originalPrice.textContent = `₹${product.originalPrice}`;
        priceDiv.appendChild(originalPrice);
        
        productInfo.appendChild(priceDiv);
        
        // Create rating
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'product-rating';
        
        // Add stars based on rating
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            if (i < fullStars) {
                star.className = 'fas fa-star';
            } else if (i === fullStars && hasHalfStar) {
                star.className = 'fas fa-star-half-alt';
            } else {
                star.className = 'far fa-star';
            }
            ratingDiv.appendChild(star);
        }
        
        const reviews = document.createElement('span');
        reviews.textContent = `(${product.reviews})`;
        ratingDiv.appendChild(reviews);
        
        productInfo.appendChild(ratingDiv);
        productCard.appendChild(productInfo);
        
        dealsSlider.appendChild(productCard);
    });
};

// Call the function to populate deals
document.addEventListener('DOMContentLoaded', () => {
    populateDealsSlider();
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    if (!testimonials.length) return;
    
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

function nextTestimonial() {
    if (!testimonials.length) return;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials on mobile view
function setupTestimonialSlider() {
    if (window.innerWidth <= 992 && testimonials.length > 1) {
        showTestimonial(0);
        setInterval(nextTestimonial, 5000);
    }
}

// Run testimonial slider setup on load
window.addEventListener('load', setupTestimonialSlider);
window.addEventListener('resize', setupTestimonialSlider);

// Product Quick View
const quickViewButtons = document.querySelectorAll('.btn-view');

quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = e.target.closest('.product-card');
        if (!productCard) return;
        
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        const productImage = productCard.querySelector('img').src;
        
        alert(`Quick View: ${productName}\nPrice: ${productPrice}\nImage: ${productImage}`);
        // In a real implementation, this would open a modal with product details
    });
});

// Add to Cart functionality
document.addEventListener('click', (e) => {
    const cartButton = e.target.closest('.btn-cart');
    if (!cartButton) return;
    
    e.preventDefault();
    const productCard = cartButton.closest('.product-card');
    if (!productCard) return;
    
    const productName = productCard.querySelector('h3').textContent;
    
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        let count = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = count + 1;
    }
    
    // Show confirmation
    const confirmation = document.createElement('div');
    confirmation.className = 'cart-confirmation';
    confirmation.textContent = `${productName} added to cart!`;
    
    document.body.appendChild(confirmation);
    
    // Remove after animation
    setTimeout(() => {
        confirmation.classList.add('show');
        setTimeout(() => {
            confirmation.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(confirmation);
            }, 300);
        }, 2000);
    }, 10);
});

// Newsletter form validation
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (!emailInput) return;
        
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // In a real implementation, this would send the data to a server
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
}

// Products Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // View Switching
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const productsList = document.querySelector('.products-list');

    if (gridViewBtn && listViewBtn && productsList) {
        gridViewBtn.addEventListener('click', () => {
            productsList.classList.remove('list-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', () => {
            productsList.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    }

    // Price Range Slider
    const priceSlider = document.querySelector('.price-slider');
    const minPriceInput = document.querySelector('.min-price');
    const maxPriceInput = document.querySelector('.max-price');

    if (priceSlider && minPriceInput && maxPriceInput) {
        noUiSlider.create(priceSlider, {
            start: [0, 10000],
            connect: true,
            range: {
                'min': 0,
                'max': 10000
            }
        });

        priceSlider.noUiSlider.on('update', function(values) {
            minPriceInput.value = Math.round(values[0]);
            maxPriceInput.value = Math.round(values[1]);
        });

        minPriceInput.addEventListener('change', function() {
            priceSlider.noUiSlider.set([this.value, null]);
        });

        maxPriceInput.addEventListener('change', function() {
            priceSlider.noUiSlider.set([null, this.value]);
        });
    }

    // Filter Functionality
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const resetFiltersBtn = document.querySelector('.reset-filters');

    if (applyFiltersBtn && resetFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
            const selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value);
            const selectedRatings = Array.from(document.querySelectorAll('.rating-filter:checked')).map(cb => cb.value);
            const minPrice = minPriceInput.value;
            const maxPrice = maxPriceInput.value;
            const inStockOnly = document.querySelector('.stock-filter:checked') !== null;

            // Here you would typically make an API call to filter products
            // For now, we'll just log the filters
            console.log({
                categories: selectedCategories,
                brands: selectedBrands,
                ratings: selectedRatings,
                priceRange: [minPrice, maxPrice],
                inStockOnly
            });
        });

        resetFiltersBtn.addEventListener('click', function() {
            // Reset all checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            
            // Reset price slider
            if (priceSlider.noUiSlider) {
                priceSlider.noUiSlider.set([0, 10000]);
            }
        });
    }

    // Sorting Functionality
    const sortSelect = document.querySelector('.sort-by select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            // Here you would typically make an API call to sort products
            console.log('Sorting by:', sortValue);
        });
    }

    // Items per page
    const itemsPerPageSelect = document.querySelector('.show-count select');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', function() {
            const itemsPerPage = this.value;
            // Here you would typically make an API call to update pagination
            console.log('Items per page:', itemsPerPage);
        });
    }

    // Pagination
    const pageButtons = document.querySelectorAll('.page-numbers button');
    if (pageButtons.length > 0) {
        pageButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                pageButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                // Here you would typically make an API call to get the next page
                console.log('Page:', this.textContent);
            });
        });
    }

    // Previous/Next Page
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');

    if (prevPageBtn && nextPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            const currentPage = document.querySelector('.page-numbers button.active');
            if (currentPage && currentPage.previousElementSibling) {
                currentPage.classList.remove('active');
                currentPage.previousElementSibling.classList.add('active');
                // Here you would typically make an API call to get the previous page
                console.log('Previous page');
            }
        });

        nextPageBtn.addEventListener('click', function() {
            const currentPage = document.querySelector('.page-numbers button.active');
            if (currentPage && currentPage.nextElementSibling) {
                currentPage.classList.remove('active');
                currentPage.nextElementSibling.classList.add('active');
                // Here you would typically make an API call to get the next page
                console.log('Next page');
            }
        });
    }
});

// Product Details Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product Gallery
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src;
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Quantity Selector
    const quantityInput = document.querySelector('.quantity-selector input');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');

    if (quantityInput && minusBtn && plusBtn) {
        minusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value < 10) {
                quantityInput.value = value + 1;
            }
        });

        quantityInput.addEventListener('change', () => {
            let value = parseInt(quantityInput.value);
            if (value < 1) quantityInput.value = 1;
            if (value > 10) quantityInput.value = 10;
        });
    }

    // Product Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Add to Cart
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value) || 1;
            // Here you would typically add the product to cart
            // For now, we'll just update the cart count
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                let count = parseInt(cartCount.textContent) || 0;
                cartCount.textContent = count + quantity;
            }

            // Show confirmation message
            const confirmation = document.createElement('div');
            confirmation.className = 'cart-confirmation';
            confirmation.textContent = 'Product added to cart!';
            document.body.appendChild(confirmation);

            setTimeout(() => {
                confirmation.classList.add('show');
                setTimeout(() => {
                    confirmation.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(confirmation);
                    }, 300);
                }, 2000);
            }, 10);
        });
    }

    // Add to Wishlist
    const wishlistBtn = document.querySelector('.add-to-wishlist');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            this.innerHTML = `<i class="fas fa-heart"></i> ${isActive ? 'Added to Wishlist' : 'Add to Wishlist'}`;
        });
    }
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const subject = this.querySelector('#subject').value.trim();
        const message = this.querySelector('#message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Blog Search
const blogSearchForm = document.querySelector('.search-widget form');
if (blogSearchForm) {
    blogSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input').value.trim();
        if (searchTerm) {
            // Here you would typically perform a search
            console.log('Searching for:', searchTerm);
        }
    });
}

// Blog Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-widget form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value.trim();
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would typically send the subscription request to a server
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
} 