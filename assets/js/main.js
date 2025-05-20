// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get mobile menu elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Add click event listener to toggle mobile menu
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Card hover animations
document.addEventListener('DOMContentLoaded', function() {
    // Get all card elements
    const cards = document.querySelectorAll('.card');
    
    // Add hover effects to each card
    cards.forEach(card => {
        // Scale up on hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        // Return to normal size when hover ends
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}); 