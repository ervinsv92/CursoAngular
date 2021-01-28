import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel;
  recordarme:boolean = false;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if(localStorage.getItem('email')){
        this.usuario.email = localStorage.getItem('email');
        this.recordarme = true;
    }
  }

  login(form:NgForm){
    if(form.invalid) return;

    this.auth.login(this.usuario).subscribe(
      (resp)=>{
        if(this.recordarme){
          localStorage.setItem('email', this.usuario.email)
        }else{
          if(localStorage.getItem('email')){
            localStorage.removeItem('email')
          }
        }

        this.router.navigateByUrl('/home');
      },
      (err)=>{
        alert(`Error al auntenticar: ${err.error.error.message}`);
      }
    );
  }

}
