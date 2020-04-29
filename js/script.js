document.onclick = () => {
    +document.querySelector('.patrons').value--;
    let audio = new Audio();
    audio.src = './sounds/Выстрел.mp3';
    let audioEmpty = new Audio();
    audioEmpty.src = './sounds/пустой выстрел.wav';

    if (document.querySelector('.patrons').value <= 5 && document.querySelector('.patrons').value >= 0) {
        audio.autoplay = true;   
        audioEmpty.autoplay = false;
    } else {
        +document.querySelector('.patrons').value++; 

        audioEmpty.autoplay = true;
        audio.autoplay = false;  
    };
};

document.addEventListener('keydown', function(event) {
    let audio3 = new Audio();
	audio3.src = './sounds/перезарядка.wav';

    if (event.code == 'KeyR' && document.querySelector('.patrons').value < 5) {
        audio3.autoplay = true;
        
        document.querySelector('.patrons').value = 5; 
    } else {
        audio3.outoplay = false;
    };
});