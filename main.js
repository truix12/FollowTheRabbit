// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Wake up, Neo...', 'The Matrix has you...','Follow the white rabbit.', 'Knock, knock, Neo...']

// parametry 
let activeText = 0;
let activeLetter = -20;
const time = 100

// Implementacja

const addLetter = () => {
  if(activeLetter>= 0) {
 spnText.textContent += txt[activeText][activeLetter];
  }
 activeLetter++;
  
 if (activeLetter === txt[activeText].length) {
   activeText++;

   if (activeText === txt.length) return;

   return setTimeout(() => {
    activeLetter = -15;
    spnText.textContent = "";
    addLetter();
   }, 2000);
   
 }
 
 setTimeout(addLetter, time);
}

addLetter();

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);