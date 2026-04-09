const CvsF = 32
const CvsK = 273.15
let converF, converK;
let temperatura 

do {

    temperatura = window.prompt("Bienvenido al programa para transformar °C a °F\nFavor de ingresar el valor que desea convertir:");

    if (temperatura == null) {
        alert("Operacion cancelada");
        temperatura = undefined;
    }

    temperatura = temperatura.trim();

    if (temperatura === "" || isNaN(temperatura)) {
        alert("Por favor ingresa un número válido.")
        temperatura = undefined;
    } else {
        temperatura = Number(temperatura);
    }

} while (temperatura === undefined);

console.log("Temperatura ingresada " + temperatura);

converF = (temperatura * 1.8) + Number(CvsF);
converK = temperatura + Number(CvsK);


console.log("La conversion de °C a °F es: " + converF);
console.log("La conversion de °C a °K es: " + converK);

prompt("Checa la consola inspeccionando :)")



