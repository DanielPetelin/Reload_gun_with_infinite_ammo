document.onclick = () => {
    let delPatrons = +document.querySelector('.patrons').value--;
    let audio = new Audio();
	audio.src = './sounds/Выстрел.mp3';
	audio.autoplay = true;

    if (delPatrons == 0) {
        +document.querySelector('.patrons').value++;
        audio.autoplay = false;
    };
};

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyR' && document.querySelector('.patrons').value < 5) {
        let audio2 = new Audio();
	    audio2.src = './sounds/перезарядка.wav';
        audio2.autoplay = true;
        
        document.querySelector('.patrons').value = 5; 
    } else {
        audio2.outoplay = false;
    };
});