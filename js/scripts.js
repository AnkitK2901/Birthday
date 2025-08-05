document.addEventListener('DOMContentLoaded', function () {

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