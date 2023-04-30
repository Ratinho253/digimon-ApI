'use strict'

// export const getCardDigimon = async(nome) => {

//     let name = nome

//     const url = `https://digimon-api.vercel.app/api/digimon/name/Koromon`

//     const response = await fetch(url)
//     const data = await response.json()

//     return data
// }

 export const getCardDigimon = async(name) => {

    const url = `https://www.digi-api.com/api/v1/digimon/Garummon`

    const response = await fetch(url)
    const data = await response.json()

    return data
}



