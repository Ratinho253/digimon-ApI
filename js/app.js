'use strict'

import '../js/router.js'

import { getCardDigimon } from "../js/api.js"
import { getfiltroDigimon } from "../js/api.js"

const filtro = await getfiltroDigimon()

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

export const carregarDigimon =  () => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')

    const cardPrincipal = document.getElementById('root')

    cardPrincipal.append(divCard)

    //  const digimonFiltrado = digimon.filter ( digimin => digimin.name == 'Koromon')

    const card =  digimon.map(carregarCardDigimon)
    


    divCard.replaceChildren(...card)

}

// carregarDigimon()

export async function page() {

    const input = document.getElementById('input-digi')
    input.addEventListener('keyup', async function(event){

        var tecla = event.key || event.keyCode;
        console.log(tecla);
        if(tecla == 'Enter'){
            const valorInput = input.value
            const digimon = await getfiltroDigimon(valorInput)

            console.log(digimon[0].name);
            console.log(digimon[0].img)

            if(valorInput == digimon.name || valorInput == digimon.img){
                return carregarDigimon()
            }else {
                return false
            }
        }
    })

}

export const carregarDigimonName = (name) => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')

    const cardPrincipal = document.getElementById('root')

    cardPrincipal.append(divCard)

    const digimonFiltrado = digimon.filter( digimin => digimin.name == `${name}`)

    const card =  digimonFiltrado.map(carregarCardDigimon)

    divCard.replaceChildren(...card)

}

page()
carregarDigimonName()

