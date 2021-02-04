import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate{
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  

  constructor() { }

  existeUsuario():Promise<ErrorValidate> | Observable<ErrorValidate>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
      }, 3000);
    });
  }

  noSolano(control:FormControl):ErrorValidate{

    if(control.value && control.value.toLowerCase() === 'solano'){
      return {
        noSolano:true
      };
    }
    return null;
  }

  passwordsIguales(pass1Name:string, pass2Name:string){
    return (formGroup:FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name]
      const pass2Control = formGroup.controls[pass2Name]

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual:true})
      }
    }
  }
}
