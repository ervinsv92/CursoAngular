(function(){

   function activar(quien:string, momento?:string, objeto:string = 'Batiseñal'){
    /*
        El orden de los parametros debe ser, [obligatorio, opcional, por defecto]
    */ 

    if(momento){
        console.log(`${quien} activó la ${objeto} en la ${momento}`)
    }else{
        console.log(`${quien} activó la ${objeto}`)
    }
    
   }

   activar('Gordon', 'nada');
})();
