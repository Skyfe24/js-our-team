console.log("JS Ok");
// creo il mio array del team usando i dati che ci sono stati forniti
const ourTeam = [
  {
    memberName: "Wayne Barnett",
    role: "Founder & CEO ",
    memberImage: "wayne-barnett-founder-ceo.jpg",
  },
  {
    memberName: "Angela Caroll",
    role: "Chief Editor ",
    memberImage: "angela-caroll-chief-editor.jpg",
  },
  {
    memberName: "Walter Gordon",
    role: "Office Manager",
    memberImage: "walter-gordon-office-manager.jpg",
  },
  {
    memberName: "Angela Lopez",
    role: "Social Media Manager",
    memberImage: "angela-lopez-social-media-manager.jpg",
  },
  {
    memberName: "Scott Estrada",
    role: "Developer ",
    memberImage: "scott-estrada-developer.jpg",
  },
  {
    memberName: "Barbara Ramos",
    role: "Graphic Designer  ",
    memberImage: "barbara-ramos-graphic-designer.jpg",
  },
];



const allBarnett = document.getElementsByClassName('barnett')
const barnettname = document.getElementsByClassName('barnettname')
const barnettProfession = document.getElementsByClassName('barnettprofession')
barnettname.innerHTML = ourTeam[0].memberName;
barnettProfession.innerHTML = ourTeam[0].role;
allBarnett.innerHTML = ourTeam[0].memberImage;

const allCaroll = document.getElementsByClassName('caroll')
const carollname = document.getElementsByClassName('carollname')
const carollProfession = document.getElementsByClassName('carollprofession')
carollname.innerHTML = ourTeam[1].memberName;
carollProfession.innerHTML = ourTeam[1].role;
allCaroll.innerHTML = ourTeam[1].memberImage;

const allWalter = document.getElementsByClassName('walter')
const waltername = document.getElementsByClassName('waltername')
const walterProfession = document.getElementsByClassName('walterprofession')

const allLopez = document.getElementsByClassName('lopez')
const lopezname = document.getElementsByClassName('lopezname')
const lopezProfession = document.getElementsByClassName('lopezprofession')

const allEstrada = document.getElementsByClassName('estrada')
const estradaname = document.getElementsByClassName('estradaname')
const estradaProfession = document.getElementsByClassName('estradaprofession')

const allRamos = document.getElementsByClassName('ramos')
const ramosname = document.getElementsByClassName('ramosname')
const ramosProfession = document.getElementsByClassName('ramosprofession')


// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg




// const list = document.querySelector('ul'); 
//for ( let i = 0; i < ourTeam.length; i++){
//const member = ourTeam[i];
//console.log(member);

//ourTeam += `<li>
//    <p> Name </p>
//    <p> Role </p>
//    <p> Image </p>
//</li>`


//}


