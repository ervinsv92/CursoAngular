import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma:FormGroup;
  constructor(private fb:FormBuilder, private validadores:ValidadoresService) { 
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit() {
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get nombreNoValido () {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  } 

  get apellidoNoValido () {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  } 

  get correoNoValido () {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  } 

  get usuarioNoValido () {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  } 

  get distritoNoValido () {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }

  get ciudadNoValido () {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  get pass1NoValido () {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }

  get pass2NoValido () {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return pass1 === pass2
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', [Validators.required, Validators.minLength(5), this.validadores.noSolano]], //no se pone () en la funcion de validacion creada, ya que el evento del form es el que la ejecuta
      correo:['', [Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      correo:['', , this.validadores.existeUsuario ],
      pass1 : ['', Validators.required],
      pass2 : ['', Validators.required],
      direccion:this.fb.group({
        distrito:['', Validators.required],
        ciudad:['', Validators.required]
      }),
      pasatiempos:this.fb.array([])
    },{
      validators:this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  guardar(){
    console.log(this.forma)
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control =>{

        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched());
        }else{
          control.markAsTouched();
        }

      });
    }
    this.forma.reset({
      nombre:'Sin Nombre'
    });

  }

  cargarDataAlFormulario(){
    //se puede utilizar el reset en lugar del setValue, esto es mejor para no tener que pasar el objeto completo
    //this.forma.setValue(//tambien sirve, pero con los datos completos
    this.forma.reset(
      {
        "nombre": "Ervin",
        "apellido": "Solano",
        "correo": "correo@correo.com",
        "direccion": {
          "distrito": "por ahi",
          "ciudad": "nada"
        }
      }
    );

    //carga el array de pasatiempos del formulario
    ['Comer', 'Dormir'].forEach(valor => this.pasatiempos.push(this.fb.control(valor)));
  }

  agregarPasatiempo(){
    //en el push se puede pasar las mismas validaciones que se han visto
    //this.pasatiempos.push(this.fb.control('', Validators.required));
    this.pasatiempos.push(this.fb.control(''));
  }

  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }
}
