
//  function smoothScroll(targetId) {
//     const target = document.getElementById(targetId);
//     const targetPosition = target.offsetTop;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;
//     const duration = 1000;
//     let start = null;

//     function animation(currentTime) {
//         if (start === null) start = currentTime;
//         const timeElapsed = currentTime - start;
//         const run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
// }

// // Touch events handling for mobile
// let initialY = null;

// function touchStart(e) {
//     initialY = e.touches[0].clientY;
// }

// function touchMove(e) {
//     if (initialY === null) {
//         return;
//     }

//     const currentY = e.touches[0].clientY;
//     const diffY = currentY - initialY;

//     if (Math.abs(diffY) < 20) {
//         return;
//     }

//     const up = diffY < 0;
//     const targetId = up ? 'bebida' : 'comida';

//     smoothScroll(targetId);

//     initialY = null;
// }

// window.addEventListener('touchstart', touchStart, false);
// window.addEventListener('touchmove', touchMove, false);