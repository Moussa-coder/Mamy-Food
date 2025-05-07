document.addEventListener('DomContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-Toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';

    const navbar = document.querySelector('.navbar');
    navbar.appendChild(menuToggle);
    
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });