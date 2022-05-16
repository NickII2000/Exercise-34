// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// touches

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('touchstart');
        console.log(e.touches);
    });
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log('touchmove');
    // });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('touchend');
    // });

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();
    //     console.log('touchstart');
    //     console.log(e.touches);
    //     console.log(e.targetTouches);
    //     console.log(e.changedTouches);
    // });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log(e.targetTouches[0].pageX);
    // });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('touchend');
    // });
});

// touches
// targetTouches
// changedTouches