let pokemonRepository = (function () {    // wrapping pokemonList array inside of an IIFE (Immediately Invoked Function Expression)
    let pokemonList = [];                     // an empty array of pokemon objects

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  
    function add (pokemon) {    // the add function adds the selected pokemon to the array
      if (typeof pokemon === 'object' &&    // checks whether pokemon is an object
        'name' in pokemon &&                // checks that pokemon object includes name key 
        'height' in pokemon &&    // checks that pokemon object includes height key
        'types' in pokemon       // checks that pokemon object includes types key
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon cannot be pushed to pokemonList');
 }  
  }
  
    function getAll () {    // the getAll function returns all items in the pokemonList array
      return pokemonList;
    }
  
    
    function addListItem(pokemon) {       // the addListItem function adds a pokemon as a list item and button
      // assign ul element to pokemonList variable
      let pokemonList = document.querySelector('.pokemon-list');
  
      // create an li element
      let listItem = document.createElement('li');
      
      // create a button element
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      
      // add button to listItem
      listItem.appendChild(button);
  
      // add listItem to pokemonList
      pokemonList.appendChild(listItem);
    
      // show pokemon details when user clicks on pokemon button
      button.addEventListener('click', () => {
        showDetails(pokemon);
      }
    )};

    function showDetails (pokemon) {
        loadDetails(pokemon);
    }

    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then (function (json) {
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            }); 
        }).catch(function (e){
            console.error(e);
        })
    }
  
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details) {
            //pokemon details
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
            showModal(pokemon);
        }).catch(function(e){
            console.error(e);
        });
    }

    // Displays the modal with pokemon details
    function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');

        modalContainer.innerHTML =''                                    // clears existing modal content
        let modal = document.createElement('div');                      // creates new div to hold modal
        modal.classList.add('modal');                                   // adds class of modal to newly created div

        let closeButtonElement = document.createElement('button');      // create a button element
        closeButtonElement.classList.add('modal-close');                // add class of modal-close to newly created button
        closebuttonElememt.innerText = 'X';                             // set inner text of button to 'X'
        closeButtonElement.addEventListener('click', hideModal);        // hide modal when user clicks button    

        let titleElement = document.createElement('h1');                // create a title element for modal
        titleElement.innerText = pokemon.name;                          // add pokemon name to modal title

        let imageElement = document.createElement('img');               // creates element to hold image
        imageElement.classList.add('modal-img');                        // add modal-img class to modal 
        imageElement.src = pokemon.imageUrl;                            // link pokemon image to modal


        let contentElement = document.createElement('p');               // create a new paragraph element within modal
        contentElement.innerText = 'Height: ' + pokemon.height;         // concatenate height details

        let typesElement = document.createElement('p');
        typesElement.innerText = 'Types: ' + pokemon.types;             // create new paragraph element within modal

        modal.appendChild(closeButtonElement);                          // add close button to modal
        modal.appendChild(titleElement);                                // add pokemon name to modal
        modal.appendChild(imageElement);                                // add pokemon image to modal
        modal.appendChild(contentElement);                              // add pokemon height to mdoal
        modal.appendChild(typesElement);                                // add pokemon types to modal
        modalContainer.appendChild(modal);
        
        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (e) => {               // since this is also triggered when clicking inside the modal, 
            let target = e.target;                                      
            if (target === modalContainer) {                            // only close it if the user clicks directly on the overlay
                hideModal();
            };
        })

    }


    return {                                                            // this returns an object with the value of the getAll and the add function
      getAll: getAll,                                                   // getAll: is the key that calls the function and returns the value of the same name (key : value)
      add:add,                                                          // add: is the key that calls the function and returns the value of the same name (key : value)
      loadList: loadList,
      loadDetails: loadDetails,
      addListItem: addListItem, 
      showDetails: showDetails
    }
  }) ();                                                                // the (); makes this a self-executing function
  
  
 pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    }); 
  });
  
  
//   add modal to 