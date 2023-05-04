'use strict'

export const getCardDigimon = async(name) => {

    const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`

    const response = await fetch(url)
    const data = await response.json()
    

    return data
}

 export const getCardDigimonFiltro = async(name) => {

    const url = `https://www.digi-api.com/api/v1/digimon/${name}`

    const response = await fetch(url)
    const data = await response.json()
    

    return data
}
console.log(await getCardDigimonFiltro('Koromon'));



