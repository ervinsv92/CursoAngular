import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', [Validators.required, Validators.minLength(5)]],
      correo:['', [Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });
  }

  guardar(){

  }
}
