'use strict'

import '../js/router.js'

import { getCardDigimon } from "../js/api.js"

const aaaa = await getCardDigimon()

console.log(getCardDigimon);

const carregarCardDigimon = (digimon) => {

    const divCard = document.getElementById('container_digimon')
    

    const divCardDigimon = document.createElement('div')
    divCardDigimon.classList.add('Safe_digimon')

    // const imgDigimon = document.createElement('img')
    // imgDigimon.classList.add('img_digimon')
    // imgDigimon.src = `${digimon.images} `

    const nameDigimon = document.createElement('p')
    nameDigimon.classList.add('text_name')
    console.log(nameDigimon);
    nameDigimon.textContent = digimon.name
    console.log(nameDigimon);

    divCardDigimon.append(nameDigimon)

    divCard.append(divCardDigimon)

    return divCard
}

const carregarDigimon = () => {

    const cardPrincipal = document.getElementById('container_digimon')
    const abbb = aaaa.name.map(getCardDigimon)

    cardPrincipal.replaceChildren(...abbb)
}


carregarCardDigimon()

