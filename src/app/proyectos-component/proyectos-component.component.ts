import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServices } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosServices) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados:Empleado[]=[]; //array de empleados

  volverHome(): void{

    this.router.navigate(['']);
  }

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    
    this.router.navigate(['']);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
