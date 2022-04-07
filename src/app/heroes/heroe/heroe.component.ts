import { Component } from "@angular/core";



@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html' 

})
export class HeroeComponent{
    
    nombre : string = 'Sipider';
    edad : number = 24 ;

    get nombreCap () : string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre() :string {

        return `${ this.nombre} - ${this.edad}`
    }

    cambiarNombre () : void{
        this.nombre = 'Iroman';
    }

    cambiarEdad () : void {
         this.edad = 32;
    }
}
