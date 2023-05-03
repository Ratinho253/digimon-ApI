'use strict'

export const getCardDigimon = async(nome) => {

    let name = nome

    const url = `https://digimon-api.vercel.app/api/digimon/`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    return data
}

//  export const getCardDigimon = async(name) => {

//     const url = `https://www.digi-api.com/api/v1/digimon/${name}`

//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data);

//     return data
// }



