import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel;
  recordarme:boolean;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm){
    if(form.invalid) return;

    this.auth.nuevoUsuario(this.usuario).subscribe(
      resp =>{
        console.log(resp);
        if(this.recordarme){
          localStorage.setItem('email', this.usuario.email)
        }else{
          localStorage.removeItem('email')
        }
        this.router.navigateByUrl('/home');
      },
      err => {
        alert(`Error al registrar: ${err.error.error.message}`)
      }
    );
  }
}
