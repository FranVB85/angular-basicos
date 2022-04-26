import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

// interface Personaje{
//   nombre: string;
//   poder: number;
// }
// Se ha cortado y pegado en dbz.interface.ts

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  

  // personajes : Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 7500
  //   }
  // ];
  //TODO ESTO LO CORTAMOS Y PEGAMOS EN DBZ.SERVICE.TS

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }



   //agregarNuevoPersonaje( argumento: Personaje) {
   // this.personajes.push(argumento);

   constructor() {}
  }

  
  // nuevo: Personaje = {
    
  //   nombre: '',
  //   poder: 0
  // }

  // agregar( ){
  //   if(this.nuevo.nombre.trim().length === 0){return;}

  //   console.log(this.nuevo);

  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   }
  // }


