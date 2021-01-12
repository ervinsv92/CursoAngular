(()=>{

  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad//se puede dejar asi si se llaman igual
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface SuperHeroe{
    nombre:string,
    artesMarciales:string[]
  }
  
  let batman:SuperHeroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  let resultadoDoble = ( a:number, b:number ):number =>{
    return (a + b) * 2
  }

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.
  //End Sub

  class Rectangulo{
    constructor(public base:number, public altura:number){
      
    }

    //por ser clase no lleva la palabra function
    calcularArea(){
      return this.base*this.altura;
    }

    calcularArea2 = ():number => this.base * this.altura;
  }

})();