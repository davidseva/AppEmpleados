import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosServices{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

  }

    empleados:Empleado[]=[ //array de empleados
  new Empleado("David","Seva","Presidente",8500),
  new Empleado("Maria","Gomez","Administrativa",2500),
  new Empleado("Laura","Martínez","Directora",5500),
  new Empleado("Violeta","Mas","Limpiadora",600)
];

  agregarEmpleadoServicio(empleado:Empleado){   
      this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
      empleado.nombre + "\n" + "Salario: " + empleado.salario) 
      this.empleados.push(empleado);
  }
}