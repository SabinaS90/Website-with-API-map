$('.navbar__links').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
});



$('document').ready(function () {
    $('.news__imgs').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.news__imgs').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

})


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const malmo = { lat: 55.5600, lng: 13.0247 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "4bc5ae489b56db43",
        zoom: 10,
        center: malmo,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: malmo,
        map: map,
    });
}

const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '' || firstName.value == null) {
        messages.push('Name is required')
    }
    e.preventDefault()
})


function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email adress is valid"

    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter valid email adress";
    }
}
