function displayPresInformation(president){
    console.log(president);

    let CardContainer = document.querySelector(".bottom-container")
    let newCard = createCard(president);
    CardContainer.appendChild(newCard);

}

function displayPresName(president){
    console.log("function displayPresName running");
    let NameContainer = document.querySelector(".bottom-container");
    let NameCard = createNameCard(president);
    NameContainer.appendChild(NameCard);
}

function createNameCard(president){
    let nameCard = document.createElement('p');
    nameCard.classList.add('.info-container');

    let PresName = document.querySelector('div');
    PresName.classList.add('card-body');

    let name = document.createElement('p');
    name.textContent = `Name: ${president.name}`;
    name.classList('card-title');
    
    PresName.appendChild(name);
    nameCard.appendChild(nameCard);
    
    return PresCard;
}


function createCard(president){
    let PresCard = document.createElement('p');
    PresCard.classList.add('info-container');

    //create president detail div
    let PresDetails = document.createElement('div');
    PresDetails.classList.add('card-body');

    //making the title element and name
    let PresTitle = document.createElement('p');
    PresTitle.textContent = `Name: ${president.name}`;
    PresTitle.classList.add('card-title');
    PresDetails.appendChild(PresTitle);

    //create president Number
    let PresNumber = document.createElement('p');
    PresNumber.textContent = `Presidential Number: ${president.presidentNumber}`
    PresDetails.appendChild(PresNumber);

    //create President Term
    let PresTerm = document.createElement('p');
    PresTerm.textContent = `Presidential Term: ${president.presidentialTerm}`;
    PresDetails.appendChild(PresTerm);

    //create President Era
    let PresEra = document.createElement('p');
    PresEra.textContent = `Era during Presidency: ${president.Era}`;
    PresDetails.appendChild(PresEra);

    //create president image
    let PresImage = document.createElement('img');

    PresDetails.appendChild(PresImage);

    
    //adding the 'userDetails' div to the 'userCard' div
    PresCard.appendChild(PresDetails);
    
    return PresCard;
}

function filterName(president){
    const userinput = document.querySelector("#search-input");
    console.log(userinput);
    // clearContainer();
    displayPresName();
    // for (i = 0; i < 45; i++){
    //     console.log("filtering by president name");
    //     displayPresName([i]);
    // }

}

// async function SearchBTN(event){
//     event.preventDefault();
//     console.log("button clicked");

//         let userData = await fetchJSONData();
//         console.log("User data: ", userData);
//         currentPres = userData.results;
//         displayPresInformation(currentPres);
// }

// function setPresidentCards(president){
//     console.log(president);

//     for(const president of presidents){
//         createCard(president);
//     }
// }

// function displayCards(presidents){
//     let cardsContainer = document.querySelector('.info-container');
//     clearContainer(cardsContainer);

//     let firstPres = presidents[0];
//     let newPresCard = createCard(firstPres);
//     cardsContainer.appendChild(newPresCard);
// }

// function createPresNameCards(presidents){
//     console.log("createPresNameCards function called");
//     let PresTitle = document.createElement('p');
//     PresTitle.textContent = `Name: ${president.name}`;
//     PresTitle.classList.add('card-title');
//     PresDetails.appendChild(PresTitle);
// }


// function filterbyPresidentName(president){
//     console.log("filterbyPresidentName function called");
//     // let PresFilter = document.querySelector('.bottom-container');
//     clearContainer();
//     // createPresNameCards(presidents);
//     let PresTitle = document.createElement('p');
//     PresTitle.textContent = `Name: ${president.name}`;
//     PresDetails.appendChild(PresTitle);
//     for (i = 0; i < 45; i++){
//         console.log(PresData)
//         displayPresInformation(RECpresidentinfo[i]);
//     }
//     return data;
    
// }

    

// function filter(filterValue, presidents){
//     console.log("Filter presidents by: ", filterValue);

//     if(filterValue === 'All Information'){
//         setPresidentCards(presidents);
//     }
//     else if (filterValue == 'President Name'){
//         let nameONLY = filterbyPresidentName(presidents);
//         console.log("filter value = president name")
//         console.log("US president names: ", nameONLY )
//         displayCards(presidents);
//     }
//     if (filterValue === "Presidential Number"){
//         filterbyPresidentNumber(presidents);
//     }
//     if(filterValue === "Presidential Term"){
//         filterbyPresidentTerm(presidents);
//     }
//     if(filterValue === "Era"){
//         filterbyPresEra(presidents);
//     }

// }

async function fetchJSONData(){

    const information = await fetch(`data/presidents.json`);
    // console.log("Data: ", information);
    // console.log("Data status: ", information.body);
   
    const data = await information.json();
    console.log("Data:", data);
    return data;

}

async function runProgram(){
    let PresData = await fetchJSONData();
    console.log(PresData);
    // fetchJSONData();
    let RECpresidentinfo = PresData.presidents;

    //for loop (for president in receivedpresidents) to display all presidents
    for (i = 0; i < 45; i++){
        console.log(PresData)
        displayPresInformation(RECpresidentinfo[i]);
    }
    
    let filtersearchbtn = document.querySelector('#fetchsearch-button');
    filtersearchbtn.addEventListener('click', (e) => SearchBTN(e) );

    let filterbtn = document.querySelector('#presidentFilter');
    filterbtn.addEventListener('change', (event) => {
        filter(event.target.value);
    });


    let InputSearchbtn = document.querySelector("#inputsearch-button");
    InputSearchbtn.addEventListener('click', displayPresName());
    console.log('runProgram');
    //your code goes here
}
document.addEventListener('DOMContentLoaded', runProgram);