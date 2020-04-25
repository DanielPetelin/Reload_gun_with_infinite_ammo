document.onclick = () => {
    let delPatrons = +document.querySelector('.patrons').value--;

    if (delPatrons == 0) {
        +document.querySelector('.patrons').value++;
    };
};

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyR') {
        document.querySelector('.patrons').value = 5;
    }
});