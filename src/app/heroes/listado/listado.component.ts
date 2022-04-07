import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes : string [] = ['Spider', 'Hulk', 'Thor','Cap','Ironman'];
  borrado : String = '';

  borrarHeroe () {  
  this.borrado = this.heroes.shift() || '' ;
  }

  
}
