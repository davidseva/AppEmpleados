import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService){}

  empleados:Empleado[]=[ //array de empleados
  new Empleado("David","Seva","Presidente",8500),
  new Empleado("Maria","Gomez","Administrativa",2500),
  new Empleado("Laura","Martínez","Directora",5500),
  new Empleado("Violeta","Mas","Limpiadora",600)

  ];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
