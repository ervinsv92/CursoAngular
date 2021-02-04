import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }
  noSolano(control:FormControl):{[s:string]:boolean}{

    if(control.value?.toLowerCase() === 'solano'){
      return {
        noSolano:true
      };
    }
    return null;
  }
}
