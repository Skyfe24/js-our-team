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



const allBarnett = document.getElementsByClassName('barnett');
const barnettname = document.getElementsByClassName('barnettname')[0];
const barnettProfession = document.getElementsByClassName('barnettprofession')[0];
const barnettImage =  document.getElementsByClassName('barnettjpg')[0];
barnettname.innerHTML = ourTeam[0].memberName; 
barnettProfession.innerHTML = ourTeam[0].role;
barnettImage.innerHTML = ourTeam[0].memberImage;

const allCaroll = document.getElementsByClassName('caroll');
const carollname = document.getElementsByClassName('carollname')[0];
const carollProfession = document.getElementsByClassName('carollprofession')[0];
const carollImage =  document.getElementsByClassName('carolljpg')[0];
carollname.innerHTML = ourTeam[1].memberName;
carollProfession.innerHTML = ourTeam[1].role;
carollImage.innerHTML = ourTeam[1].memberImage;

const allWalter = document.getElementsByClassName('walter');
const waltername = document.getElementsByClassName('waltername')[0];
const walterProfession = document.getElementsByClassName('walterprofession')[0];
const walterImage =  document.getElementsByClassName('walterjpg')[0];
waltername.innerHTML = ourTeam[2].memberName;
walterProfession.innerHTML = ourTeam[2].role;
walterImage.innerHTML = ourTeam[2].memberImage;

const allLopez = document.getElementsByClassName('lopez');
const lopezname = document.getElementsByClassName('lopezname')[0];
const lopezProfession = document.getElementsByClassName('lopezprofession')[0];
const lopezImage =  document.getElementsByClassName('lopezjpg')[0];
lopezname.innerHTML = ourTeam[3].memberName;
lopezProfession.innerHTML = ourTeam[3].role;
lopezImage.innerHTML = ourTeam[3].memberImage;

const allEstrada = document.getElementsByClassName('estrada');
const estradaname = document.getElementsByClassName('estradaname')[0];
const estradaProfession = document.getElementsByClassName('estradaprofession')[0];
const estradaImage =  document.getElementsByClassName('estradajpg')[0];
estradaname.innerHTML = ourTeam[4].memberName;
estradaProfession.innerHTML = ourTeam[4].role;
estradaImage.innerHTML = ourTeam[4].memberImage;

const allRamos = document.getElementsByClassName('ramos');
const ramosname = document.getElementsByClassName('ramosname')[0];
const ramosProfession = document.getElementsByClassName('ramosprofession')[0];
const ramosImage =  document.getElementsByClassName('ramosjpg')[0];
ramosname.innerHTML = ourTeam[5].memberName;
ramosProfession.innerHTML = ourTeam[5].role;
ramosImage.innerHTML = ourTeam[5].memberImage;

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


