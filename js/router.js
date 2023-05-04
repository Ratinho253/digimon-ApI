// 'use strict'

// import {carregarDigimon} from './app.js'

// const routes = {
//     '/' : {html : '/pages/home.html',
//             js : carregarDigimon },
//     '/vermelho' : '/pages/vermelho.html',
//     '/azul' : '/pages/azul.html',
//     '/verde' : '/pages/green.html',
//     '/tomato' : '/pages/tomato.html',
// }

// const route = async () => {
//     window.event.preventDefault()
//     window.history.pushState({}, "", window.event.target.href)

//     const path = window.location.pathname
    
//     const response = await fetch(routes[path].html)
//     const html = await response.text()

//     document.getElementById('root').innerHTML = html

//     routes[path].js()
// }

// window.route = route