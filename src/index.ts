import {leerTeclado} from './util/entrada_teclado'
console.log("Hola Antonio")
//creamos la variable función main que llamamos main
let main = async () => {
const valor = await leerTeclado("Dime algo")
console.log(`Me has dicho: ${valor}`)
}
//invocamos a la función
main();