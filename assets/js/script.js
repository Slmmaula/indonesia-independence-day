// Toggle icon Navbar
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navLinks.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navBar = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navBar.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    // Remove toggle icon & navbar whhen click link / Scroll
    menuIcon.classList.remove('bx-x');
    navLinks.classList.remove('active');

};

var swiper = new Swiper('.swiper-container', {
    effect: 'slide',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const btnDaftar = document.querySelector('.btn');
const popupWrapper = document.getElementById('popupWrapper');
const closeBtn = document.getElementById('closeBtn');


btnDaftar.addEventListener('click', function() {
    popupWrapper.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    popupWrapper.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === popupWrapper) {
        popupWrapper.style.display = 'none';
    }
});

function handleFormSubmit() {
    const form = document.getElementById('popupForm');
    if (form.checkValidity()) {
        alert("Pendaftaran Berhasil!");
        popupWrapper.style.display = 'none';
    } else {
        alert("Mohon isi form dengan benar!")
        form.reportValidity();
    }
}