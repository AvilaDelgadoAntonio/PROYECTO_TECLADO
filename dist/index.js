"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_teclado_1 = require("./util/entrada_teclado");
console.log("Hola Antonio");
//creamos la variable función main que llamamos main
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    const valor = yield (0, entrada_teclado_1.leerTeclado)("Dime algo");
    console.log(`Me has dicho: ${valor}`);
});
//invocamos a la función
main();
