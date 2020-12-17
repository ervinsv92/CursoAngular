(()=>{

    /*
    class Avenger{
        nombre:string = "Sin nombre";
        equipo:string;
        nombreReal?:string;

        puedePelear?:boolean;
        peleasGanadas?:number;

        constructor(nombre:string, equipo:string){
            this.nombre = nombre;
            this.equipo = equipo;
        }
    }*/

    class Avenger{
        constructor(public nombre:string,
                    public equipo:string,
                    public nombreReal?:string,
                    public puedePelear?:boolean,
                    public equipeleasGanadaspo:number = 0
            ){
            
        }
    }

    const antman = new Avenger("Antman", "Capi");
    antman.equipo = "Otro equipo";
})();
