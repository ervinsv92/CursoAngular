(()=>{

    const sumar = (a:number, b:number):number => a + b;
    const nombre = ():string => 'Hola fernando';

    const obtenerSalario = ():Promise<string> => {
        return new Promise((resolve, reject)=>{
            resolve("Ervin");
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase()));
    /*
    const sumar = (a:number, b:number):number =>{
        return a + b;
    }*/
})();
