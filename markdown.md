Consegna
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.


Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
3 file
 

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede ispirandovi alle immagini in allegato




// lavoro sui numeri

const totalNumbers = 5;
const maxNumbers = 100;
const Numbers = generateNumbers(totalNumbers);
console.log(Numbers);
let result = document.getElementById("grid");

// funzione: genera i 5 numeri diversi
function generateNumbers(totalNumbers) {
  let Numbers = [];

  while (Numbers.length < totalNumbers) {
    let randomNumber = 0;
    do {
      randomNumber = Math.floor(Math.random() * maxNumbers) + 1;
    } while (Numbers.includes(randomNumber));
      Numbers.push(randomNumber);

    for (let i = 0; i < totalNumbers/5; i++) {
      const box = document.createElement("div");
      box.className = "box";
      box.innerText = randomNumber;
  
      grid.appendChild(box);
      setTimeout (() => {
        box.className = "no-box";
      }, 30000);
      setTimeout (() => {
        const response = parseInt(prompt('avanti esci i numeri'));
        if (Numbers.includes(response)){
        alert(response + '!' + 'Questo lo hai beccato!' );
        }
      }, 31000); 

      


      
      
     
  }}





  
  return Numbers;
  
}

  
