(()=>{
    
    const avenger = {
        nombre:'Steve',
        clave:'Cápitan América',
        poder:'Aguante'
    }

    //no importa el orden en que se obtengan
    const {nombre, clave, poder} = avenger;

    //console.log(nombre)
    //console.log(clave)
    //console.log(poder)

    /*Sin desestructuracion
        console.log(avenger.nombre)
        console.log(avenger.clave)
        console.log(avenger.poder)
    */

    /*sirve
    const extraer = (avenger:any)=>{
        const {nombre, clave, poder} = avenger;
        console.log(nombre)
        console.log(clave)
        console.log(poder)
    }
    extraer(avenger);
    */

   const extraer = ({nombre, poder}:any)=>{
    
    console.log(nombre)
    console.log(clave)
    console.log(poder)
    }
//extraer(avenger);

    const avengers:string[] = ['Thor', 'Ironman', 'Spiderman', 'Perro'];
    //para la destructuracion de array si tiene que ir en orden
    //para omitir alguno solo se pone la coma
    const [thor, ironman, , perro] = avengers
    console.log(thor, ironman, perro)

    const extraerArr = ([thor, ironman, , perro]:string[])=>{
        console.log(thor, ironman, perro)
    }

    extraerArr(avengers)
})();
