/* *** PAGE D'ACCUEIL *** */

/* *** ASIDE *** SOUS-MENU *** */

const chambre = document.getElementById('chambre');
const menuChambre = document.getElementById('menu-chambre');
chambre.addEventListener('mouseenter', function () {
    menuChambre.style.display = 'block';
});
menuChambre.addEventListener('mouseleave', function () {
    this.style.display = 'none';
});

const restaurant = document.getElementById('restaurant');
const menuRestaurant = document.getElementById('menu-restaurant');
restaurant.addEventListener('mouseenter', function () {
    menuRestaurant.style.display = 'block';
});
menuRestaurant.addEventListener('mouseleave', function () {
    this.style.display = 'none';
});

const spa = document.getElementById('spa');
const menuSpa = document.getElementById('menu-spa');
spa.addEventListener('mouseenter', function () {
    menuSpa.style.display = 'block';
});
menuSpa.addEventListener('mouseleave', function () {
    this.style.display = 'none';
});

const hotel = document.getElementById('hotel');
const menuHotel = document.getElementById('menu-hotel');
hotel.addEventListener('mouseenter', function () {
    menuHotel.style.display = 'block';
});
menuHotel.addEventListener('mouseleave', function () {
    this.style.display = 'none';
});

const blog = document.getElementById('blog');
const menuBlog = document.getElementById('menu-blog');
blog.addEventListener('mouseenter', function () {
    menuBlog.style.display = 'block';
});
menuBlog.addEventListener('mouseleave', function () {
    this.style.display = 'none';
});


/* *** ANIMATION ICONS PARTAGER *** */

const partager = document.getElementById('partage');
partager.addEventListener('click', function (e) {
    e.preventDefault();
    const icons = document.getElementById('icon-partage');
    icons.style.opacity = 0.6;
    icons.style.transform = 'translateY(10px)';
})


