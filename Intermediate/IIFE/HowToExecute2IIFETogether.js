// How to execute 2 IIFE together

( function chai() {
    console.log(`DB Connected`);
})();

(() => {
    console.log(`DB connected again`);
})()