(function(){
    const miFuncion = function(a:string){
        return a.toUpperCase();
    }

    const miFuncionF = (a:string) => a.toUpperCase();

    //console.log(miFuncion('normal'))
    //console.log(miFuncionF('flecha'))

    const sumarN = function(a:number, b:number){
        return a +b;
    }

    const sumarF = (a:number, b:number) => a+b;
    //console.log(sumarN(10, 21))
    //console.log(sumarF(10, 30))

    const hulk = {
        nombre:'Hulk',
        smash(){
            //la funcion flecha no modifica el scope, contexto, con function this no apuntaria al objeto, con la funcion flecha si
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`)
            }, 1000);
            
        }
    }

    hulk.smash()
})();
