// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
//BONUS 1:
//Trasformare la stringa foto in una immagine effettiva



//FIRST MILESTONE CREATE ARRAY OF OBJECT

const team = [
   
    {
        name: 'Wayne Barnett',
        roleCompany: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        roleCompany: 'Chief Editor	 ',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        roleCompany: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        roleCompany: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        roleCompany: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        roleCompany: 'Graphic Designer	',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }

];

console.log(team);

//MILESTONE1+ bonus 1

const teamCompany = document.querySelector('.teams')


for (let i = 0; i < team.length; i++) {
    let listTeam = team[i];

    for (let key in listTeam) {
        let infoTeams = listTeam[key]
        console.log(infoTeams);
    }
    
    //BONUS 1

    teamCompany.innerHTML += `
    <li>
        <div class="card-container">
            <img src="./img/${listTeam.photo}">
            <div>
                <h4>${listTeam['name']}</h4>
                <small> ${listTeam.roleCompany}</small>
            </div>
        </div>
    </li>
   `;
    

}

