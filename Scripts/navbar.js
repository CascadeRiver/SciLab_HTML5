const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('inactive');
    hamburger.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });