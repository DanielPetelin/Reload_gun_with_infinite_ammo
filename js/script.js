document.onclick = () => {
    var delPatrons = +document.querySelector('.patrons').value--;

    if (delPatrons == 0) {
        +document.querySelector('.patrons').value++;
        checkKey;
    };
};

function checkKey(e) {
    e = e || window.event;

    if (delPatrons == 0 && e.keyCode == 82) {
        +document.querySelector('.patrons').value + 5;
        +document.querySelector('.all').value - 5;  
    };
};