(function(){

    let mensaje:string = "hola";
    let numero:number = 123;
    let booleano:boolean = true;
    let hoy:Date = new Date();

    let cualquiercosa;
    let otracosa:string | number; //se puede hacer que acepte mas de un tipo de datos

    cualquiercosa = numero//se puede porque el tipo any aguanta todo
    cualquiercosa = mensaje//se puede 

    //los tipos de datos tambien se validan entre los objetos
    let spiderman = {
        nombre:'spiderman',
        edad:30
    };

    //spiderman = {}//no deja porque tiene que ser un objeto igual

    //mensaje = 123;//no deja porque tiene que ser el mismo tipo, el tipo lo toma de la primera asignacion

    /* VARIABLES
    let mensaje = "hola";
    const URL_SERVICIOS = "servicio"; //nunca cambian
    
    if(true){
        let mensaje = "mundo"//esta variable solo existe en este if
    }

    console.log(mensaje)
    */
    
    /* INICIO
    function saludar(nombre:string) {
        console.log('Hola' + nombre);
    }
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    saludar(wolverine.nombre);*/
})();
