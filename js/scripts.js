// This script waits for the webpage's content to load before running.
document.addEventListener('DOMContentLoaded', function () {

    // --- Logic for Chapter 2: The Highlight Reel (second-year.html) ---
    // Checks if the AOS (Animate On Scroll) library is available and if a timeline element exists on the page.
    if (typeof AOS !== 'undefined' && document.querySelector('.timeline')) {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Animation happens only once per element
            offset: 100,   // Trigger animation a little sooner
        });
    }

    // --- Logic for Chapter 3: A Gallery of Good Times (third-year.html) ---
    // Checks if the Masonry library is available and if the masonry grid element exists.
    const masonryGrid = document.querySelector('.masonry-grid');
    if (typeof Masonry !== 'undefined' && masonryGrid) {
        // Wait for all images in the grid to load first
        imagesLoaded(masonryGrid, function () {
            // Initialize Masonry to create the staggered grid layout
            new Masonry(masonryGrid, {
                itemSelector: '.grid-item',
                percentPosition: true
            });
        });
    }

    // --- Logic for Final Wishes Page (final-wishes.html) ---
    // Checks if the confetti library is available and if the confetti canvas element exists.
    const confettiCanvas = document.getElementById('confetti-canvas');
    if (typeof confetti !== 'undefined' && confettiCanvas) {
        // Create a confetti instance linked to our canvas
        const myConfetti = confetti.create(confettiCanvas, {
            resize: true,
            useWorker: true
        });

        // Fire the confetti immediately!
        myConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // And make it rain for a bit
        var duration = 5 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            var particleCount = 50 * (timeLeft / duration);
            myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

});