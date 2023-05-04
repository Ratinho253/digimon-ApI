'use strict'

import '../js/router.js'

import { getCardDigimon } from "../js/api.js"

import { getCardDigimonFiltro } from "../js/api.js";

const digimon = await getCardDigimon()



console.log(getCardDigimon);

const carregarCardDigimon = (digimon) => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')


    const divCardDigimon = document.createElement('a')
    divCardDigimon.classList.add('Safe_digimon')

    const imgDigimon = document.createElement('img')
    imgDigimon.classList.add('img_digimon')
    imgDigimon.src = digimon.img

    const nameDigimon = document.createElement('p')
    nameDigimon.classList.add('text_name')
    nameDigimon.textContent = `${digimon.name}`

    divCardDigimon.onclick = () => {

    }

    divCardDigimon.append(imgDigimon, nameDigimon)

    divCard.append(divCardDigimon)

    return divCard
}

export const carregarDigimon = () => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')

    const cardPrincipal = document.getElementById('root')

    cardPrincipal.append(divCard)

    const card = carregarCardDigimon(getDigimonFiltro)



    divCard.replaceChildren(...card)

}

// Koromon

const carregarCardDigi = async () => {

    const inputDigimon = document.getElementById('input-digi');



    inputDigimon.addEventListener('keyup',  function (key) {
        var tecla = key.key || key.keyCode;
        if (tecla == 'Enter') {
            const valorInput = inputDigimon.value;

            const getDigimonFiltro =  getCardDigimonFiltro(valorInput);
            
            const divCard = document.createElement('div')
            divCard.classList.add('container_digimon')
            divCard.setAttribute('id', 'container_digimon')

            const cardPrincipal = document.getElementById('root')

            cardPrincipal.append(divCard)
            
            const card = carregarCardDigimon(getDigimonFiltro)
            console.log(card);
            divCard.replaceChildren(card)

            console.log(card);
           


        }



    })
}

carregarCardDigi()


// carregarDigimon()
