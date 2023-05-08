'use strict'

import { getCardDigimon } from "../js/api.js"

const digimon = await getCardDigimon()

console.log(getCardDigimon);

export const carregarCardDigimon = (digimon) => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')


    const divCardDigimon = document.createElement('a')
    divCardDigimon.classList.add('Safe_digimon')
    divCardDigimon.href= './pages/filtro'

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

    // const digimonFiltrado = digimon.filter ( digimin => digimin.name == 'Koromon')

    const card = digimon.map(carregarCardDigimon)


    divCard.replaceChildren(...card)

}
carregarDigimon()