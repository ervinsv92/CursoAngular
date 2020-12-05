"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Cápitan América',
        poder: 'Aguante'
    };
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    /*Sin desestructuracion
        console.log(avenger.nombre)
        console.log(avenger.clave)
        console.log(avenger.poder)
    */
    console.log(nombre);
    console.log(clave);
    console.log(poder);
})();
