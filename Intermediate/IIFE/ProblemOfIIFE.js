// Where problem arise in IIFE


// ( () => {
//     console.log(`DB Connected`);
// })()

// (() => {
//     console.log(`DB connected again`);
// })


// This syntax throw error because we don't apply where to stop context first IIFE so why used ';' to smooth operation


( function chai() {
    console.log(`DB Connected`);
})();

(() => {
    console.log(`DB connected again`);
})()