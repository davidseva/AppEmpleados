import { Empleado } from "./empleado.model";

export class EmpleadosServices{


    empleados:Empleado[]=[ //array de empleados
  new Empleado("David","Seva","Presidente",8500),
  new Empleado("Maria","Gomez","Administrativa",2500),
  new Empleado("Laura","Martínez","Directora",5500),
  new Empleado("Violeta","Mas","Limpiadora",600)
];

agregarEmpleadoServicio(empleado:Empleado){    
    this.empleados.push(empleado);
}
}