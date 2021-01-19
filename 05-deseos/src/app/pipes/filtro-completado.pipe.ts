import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure:false//para que haga cambios en otros componentes diferentes de donde se llamo
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(lista: Lista[], completada: boolean=true): Lista[] {
    return lista.filter(lista => lista.terminada === completada);
  }

}
