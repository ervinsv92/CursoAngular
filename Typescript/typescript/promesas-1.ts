(()=>{
    console.log("Inicio")

    const prom1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Se termino el timeout');
            //reject('rechazo'); //si se rechaza hay que capturar el error
        }, 1000);
    });

    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));

    console.log("Fin")
})();
