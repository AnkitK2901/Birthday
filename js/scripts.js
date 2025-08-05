document.addEventListener('DOMContentLoaded', function () {

    // --- Logic for Welcome Page Curtain Reveal ---
    const curtains = document.querySelector('.reveal-curtains');
    if (curtains) {
        // Hide the curtains after 2 seconds (animation is 1.5s + 0.5s delay)
        setTimeout(() => {
            curtains.style.display = 'none';
        }, 2000);
    }

    // --- Logic for Chapter 2: The Highlight Reel (second-year.html) ---
    if (typeof AOS !== 'undefined' && document.querySelector('.timeline')) {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }

    // --- Logic for Chapter 3: A Gallery of Good Times (third-year.html) ---
    const masonryGrid = document.querySelector('.masonry-grid');
    if (typeof Masonry !== 'undefined' && masonryGrid) {
        imagesLoaded(masonryGrid, function () {
            new Masonry(masonryGrid, {
                itemSelector: '.grid-item',
                percentPosition: true
            });
        });
    }

    // --- Logic for Final Wishes Page (final-wishes.html) ---
    const confettiCanvas = document.getElementById('confetti-canvas');
    if (typeof confetti !== 'undefined' && confettiCanvas) {
        const myConfetti = confetti.create(confettiCanvas, {
            resize: true,
            useWorker: true
        });
        myConfetti({
            particleCount: 200,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

});