section {
    padding: 80px 0;
    text-align: center;
    background-color: #f5f5f5;
    color: #333;

    
}

section h1 {
    margin-bottom: 20px;
}

// Change navigation menu style on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-nav', window.scrollY > 0);
});

// Change navigation menu item style on hover
var navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#555';
    });

    navLink.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});