document.addEventListener('DOMContentLoaded', function () {
    var elementsToAnimate = document.querySelectorAll('.fade_in, .slide_up, .fade_in_left, .fade_in_right');

    function checkPosition() {
        for (var i = 0; i < elementsToAnimate.length; i++) {
            var element = elementsToAnimate[i];
            var position = element.getBoundingClientRect().top;

            if (position - window.innerHeight <= 0) {
                element.classList.add('scroll_active');
            }
        }
    }

    3390
    1419
    1500

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check
});


