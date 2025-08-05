document.addEventListener('DOMContentLoaded', function () {

    // --- Logic for Welcome Page Curtain Reveal (Refined) ---
    const curtains = document.querySelector('.reveal-curtains');
    if (curtains) {
        const leftCurtain = curtains.querySelector('.left');

        // This is more robust than a timer. It waits for the CSS animation to actually finish.
        leftCurtain.addEventListener('animationend', () => {
            curtains.style.display = 'none';
        }, { once: true }); // { once: true } automatically removes the listener after it runs once.
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