'use strict'

import '../js/router.js'

import { getCardDigimon } from "../js/api.js"

const digimon = await getCardDigimon()

console.log(getCardDigimon);

const carregarCardDigimon = (digimon) => {

    const divCard = document.getElementById('container_digimon')
    

    const divCardDigimon = document.createElement('a')
    divCardDigimon.classList.add('Safe_digimon')

    const imgDigimon = document.createElement('img')
    imgDigimon.classList.add('img_digimon')
    imgDigimon.src =  `url(${digimon.image})`

    const nameDigimon = document.createElement('p')
    nameDigimon.classList.add('text_name')
    nameDigimon.textContent =  `${digimon.name}`


    divCardDigimon.append(imgDigimon,nameDigimon)

    divCard.append(divCardDigimon)

    return divCard
}

const carregarDigimon =  () => {

    const cardPrincipal = document.getElementById('container_digimon')

    const card = digimon.map(carregarCardDigimon)

    console.log(card);

    cardPrincipal.replaceChild(...card)

}

carregarDigimon()
