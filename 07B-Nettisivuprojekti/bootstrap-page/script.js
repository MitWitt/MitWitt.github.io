document.addEventListener("DOMContentLoaded", function () {
    var prevScrollPos = window.pageYOffset;
    var header = document.querySelector(".top-header");

    function toggleNavbar() {
        var currentScrollPos = window.pageYOffset;

        // Check the scroll direction
        if (prevScrollPos > currentScrollPos) {
            header.classList.add("visible");
        } else {
            header.classList.remove("visible");
        }

        prevScrollPos = currentScrollPos;
    }

    // Add a scroll event listener to toggle the navbar
    window.addEventListener("scroll", toggleNavbar);

    // Add a mousemove event listener to show the navbar when mouse is at the top
    document.addEventListener("mousemove", function (event) {
        if (event.clientY < 50) {
            header.classList.add("visible");
        }
    });
});