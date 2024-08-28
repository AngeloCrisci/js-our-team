console.log('JS OK')

const list = document.getElementById('member-list')

let items = '';

// * MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const ourTeam = [
        {name: 'Wayne' , lastname: 'Barnett' , job: 'Founder & CEO' , photo: 'wayne-barnett-founder-ceo.jpg'},
        {name: 'Angela' , lastname: 'Caroll' , job: 'Chief Editor' , photo: 'angela-caroll-chief-editor.jpg'},
        {name: 'Walter' , lastname: 'Gordon' , job: 'Office Manager' , photo: 'walter-gordon-office-manager.jpg'},
        {name: 'Angela' , lastname: 'Lopez' , job: 'Social Media Manager' , photo: 'angela-lopez-social-media-manager.jpg'},
        {name: 'Scott' , lastname: 'Estrada' , job: 'Developer' , photo: 'scott-estrada-developer.jpg'},
        {name: 'Barbara' , lastname: 'Ramos' , job: 'Graphic Designer' , photo: 'barbara-ramos-graphic-designer.jpg'},
    ]
// *MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// *MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
    

for(let member of ourTeam){
    items += `
    <li>${member.name} ${member.lastname}</li>
    <li>${member.job}</li>
    <li>${member.photo}</li>
    `
    console.log(`Nome del membro ${member.name} , cognome  ${member.lastname} Lavoro  ${member.job} e foto ${member.photo}`)
}
    
  list.innerHTML = items;
