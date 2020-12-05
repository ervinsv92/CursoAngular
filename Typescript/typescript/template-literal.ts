(function(){

    function edadAdicional(){
        return 10;
    }

    const nombre = "ervin";
    const apellido = "solano";
    const edad = 28;
    
    //dentro de las llaves es codigo js normal
    const salida = `${nombre} ${apellido} \n ( ${edad + 20 + edadAdicional()} )`; //si se hace enter desde el codigo tambien sirve
    console.log(salida)
})();
