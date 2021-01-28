import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/';
  private apiKey = 'AIzaSyCnWyQLhAU4Y45LUobr5Tetmhlp1wlB0cY';
  userToken:string;
  //Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //ingresar
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http:HttpClient) { 
    this.leerToken();
  }

  logout(){

  }

  login(usuario:UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken:true
    }

    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe( //solo se ejecuta cuando la peticion es correcta
      map(resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario:UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken:true
    }

    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apiKey}`,
      authData
    ).pipe( //solo se ejecuta cuando la peticion es correcta
      map(resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token')
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }
}