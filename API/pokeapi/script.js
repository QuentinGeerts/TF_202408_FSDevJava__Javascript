import { getDataFromUrl } from './api.js';

window.addEventListener('load', async () => {

    const POKE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

    initializeList(POKE_URL);

    async function initializeList (url) {
        const btnPrevious = document.getElementById('btnPrevious');
        const btnNext = document.getElementById('btnNext');

        const data = await getDataFromUrl(url);

        if (data.previous != null) {
            btnPrevious.removeAttribute('disabled');
            btnPrevious.onclick = () => { initializeList(data.previous); };
        }
        else {
            btnPrevious.setAttribute('disabled', '');
        }


        if (data.next != null) {
            btnNext.removeAttribute('disabled');
            btnNext.onclick = () => { initializeList(data.next); };
        }
        else {
            btnNext.setAttribute('disabled', '');
        }

        createPokeList(data.results);
    }


    /**
     *
     * @param {{name: string, url: string}[]} pokelist
     */
    function createPokeList (pokelist) {

        const list = document.getElementById('list');
        list.innerText = "";


        for (const pokemon of pokelist) {
            // Création des éléments visuels
            const div = document.createElement('div');
            const span = document.createElement('span');
            const btn = document.createElement('button');

            // Ajout des éléments dans leur parent
            list.append(div);
            div.append(span, btn);

            // Modifier les éléments visuels
            span.textContent = pokemon.name;
            btn.textContent = "Détails";

            // Appliquer un comportement pour le bouton
            btn.addEventListener('click', () => {
                showDetails(pokemon.url);
                document.getElementById('details').classList.remove('hide');
            });

        }
    }

    /**
     *
     * @param {string} url
     */
    async function showDetails (url) {

        const details = await getDataFromUrl(url);
        const species = await getDataFromUrl(details.species.url);

        console.log('details :>> ', details);
        console.log('species :>> ', species);

        const pokemonName = document.getElementById('pokemonName');
        const pokemonNumber = document.getElementById('pokemonNumber');
        const pokemonTypes = document.getElementById('pokemonTypes');
        const pokemonSprite = document.getElementById('pokemonSprite');
        const pokemonHeight = document.getElementById('pokemonHeight');
        const pokemonWeight = document.getElementById('pokemonWeight');
        const pokemonHp = document.getElementById('pokemonHp');
        const pokemonAtt = document.getElementById('pokemonAtt');
        const pokemonAttSpe = document.getElementById('pokemonAttSpe');
        const pokemonDef = document.getElementById('pokemonDef');
        const pokemonDefSpe = document.getElementById('pokemonDefSpe');
        const pokemonSpeed = document.getElementById('pokemonSpeed');


        pokemonName.textContent = details.name;
        pokemonNumber.textContent = details.id;

        // Boucler
        // pokemonTypes.textContent = details.;

        pokemonTypes.textContent = "";
        for (let i = 0; i < details.types.length; i++) {
            const span = document.createElement('span');
            span.classList.add("poketype", details.types[i].type.name);
            pokemonTypes.append(span);
            span.textContent = details.types[i].type.name;
        }

        // Récupérer les species
        pokemonSprite.textContent = "";
        const pokemonImg = document.createElement('img');
        pokemonImg.src = details.sprites.other["official-artwork"].front_default
        pokemonSprite.append(pokemonImg);


        pokemonHeight.textContent = details.height;
        pokemonWeight.textContent = details.weight;

        pokemonHp.textContent = details.stats[0].base_stat;
        pokemonAtt.textContent = details.stats[1].base_stat;
        pokemonDef.textContent = details.stats[2].base_stat;
        pokemonAttSpe.textContent = details.stats[3].base_stat;
        pokemonDefSpe.textContent = details.stats[4].base_stat;
        pokemonSpeed.textContent = details.stats[5].base_stat;

    }
});