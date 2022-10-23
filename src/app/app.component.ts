import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[]=[ //array de empleados
  new Empleado("David","Seva","Presidente",8500),
  new Empleado("Maria","Gomez","Administrativa",2500),
  new Empleado("Laura","Martínez","Directora",5500),
  new Empleado("Violeta","Mas","Limpiadora",600)

  ] 
}
