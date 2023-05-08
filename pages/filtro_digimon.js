'use strict'

import { getCardDigimonFiltro } from "../js/api.js";
import { getCardDigimon } from "../js/api.js"
import { getfiltroDigimon } from "../js/api.js";

const  filtroDigimon = await getfiltroDigimon()

const digimon = await getCardDigimon()

console.log(getCardDigimon);

 const carregarCardDigimon =  async(digimon) => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')


    const divCardDigimon = document.createElement('a')
    divCardDigimon.classList.add('Safe_digimon')

    const imgDigimon = document.createElement('img')
    imgDigimon.classList.add('img_digimon')
    imgDigimon.src = await digimon.img

    const nameDigimon = document.createElement('p')
    nameDigimon.classList.add('text_name')
    nameDigimon.textContent = `${digimon.name}`

    divCardDigimon.onclick = () => {

    }

    divCardDigimon.append(imgDigimon, nameDigimon)

    divCard.append(divCardDigimon)

    return divCard
}

 const carregarDigimon = (digimon) => {

    const divCard = document.createElement('div')
    divCard.classList.add('container_digimon')
    divCard.setAttribute('id', 'container_digimon')

    const cardPrincipal = document.getElementById('root')

    cardPrincipal.append(divCard)

    const card =  filtroDigimon(carregarCardDigimon())


    divCard.replaceChildren(...card)

}

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

            if(valorInput == digimon[0].name || valorInput == digimon[0].img){
                return carregarDigimon()
            }else {
                return false
            }
        }
    })

}

page()
