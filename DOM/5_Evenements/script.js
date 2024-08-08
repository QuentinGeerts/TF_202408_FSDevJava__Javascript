
window.onload = () => {
    const btn = document.getElementById('btn');


    btn.addEventListener('click', (e) => {
        surprise("Quentin", e);
    });


    function surprise (arg, e) {
        console.log("Surprise!");
        console.log('arg :>> ', arg);
        console.log('e :>> ', e);
    }
};

window.addEventListener('contextmenu', (e) => {
    console.log("Tu as fait un cliqué droit, je te vois !");
    e.preventDefault();
})
