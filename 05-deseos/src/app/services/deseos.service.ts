import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

  constructor() { 
   this.cargarStorage();
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.guardarStorage();
  }

  editarNombreLista(lista:Lista, nuevoTitulo:string){
    this.listas = this.listas.map((listaItem:Lista)=>{
      if(lista.id ==listaItem.id){
        listaItem.titulo = nuevoTitulo
      }
        
      return listaItem;
    })
    this.guardarStorage();
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  obtenerLista(id:string | number){
    id=Number(id);
    return this.listas.find(x => x.id == id)
  }
}
