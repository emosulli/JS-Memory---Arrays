const spellBook = ['Accio', 'Expelliarmus', 'Expecto Patronum' ];
let mannaPoints = 50;

const castSpell = () => {
    //choose a random spell
    const randomIndex = Math.floor(Math.random()* spellBook.length)
    const randomSpell = spellBook[randomIndex];
    console.log('randomSpell', randomSpell);

    //show the spell on the screen
    const spellElement = document.getElementById('spell');
    const message =`You cast the ${randomSpell} spell`;
    spellElement.textContent = message;

    //subtract 5 mana points from the total
    mannaPoints = mannaPoints - 5;
    console.log('mannaPoints', mannaPoints)

    //show the user the new mana points on the screen
    const mannaElement = document.getElementById('manna-points');
    mannaElement.textContent = mannaPoints;
}