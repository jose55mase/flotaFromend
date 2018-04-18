import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { UsuarioServicios } from './../servicios/usuarioServicios'
import { UsuarioModelo } from '../modelo/usuario.modelo';


@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioServicios]
})
export class UsuarioComponent implements OnInit {
 
  constructor(public usuarioServicios : UsuarioServicios){

  }
  public usuario : Array<UsuarioModelo>

  ngOnInit(){
    this.cargarUsuario();
  }
  public cargarUsuario() : void{
    this.usuarioServicios.getUsuario().subscribe(res => { 
      this.usuario = res;
      console.log(res);    
    });
  }
  
  edit = false;
  campo = false;


  lista: any = [
    {id:0,nombre:'Jose luis',usuario:"jose",clave:123 ,apellido:'castañeda',correo:'jose@gmail.com',cedula:1234334, celular:39832, direccion:'carre 43 n 75'},
    {id:1,nombre:'Camilo',usuario:"cami",clave:123 ,apellido:'Smith',correo:'kmi@hotmail.com',cedula:1234334, celular:39832, direccion:'carre 43 n 75'}
  ];

  conductor: any = {
    id:null, 
    nombre:null,
    usuario : null,
    clave : null,
    apellido:null, 
    correo:null, 
    cedula:null, 
    celular:null, 
    telefon:null, 
    direccion:null, 
    vehiculo:null
  };
  
  
  crear_conductor: boolean = false;
  editar_conductor: boolean = false;
  ver_conductor: boolean = false;
  eliminar_conductor: boolean = false;
  editar_item: boolean = false;

 
crearUsuario(){
  if(this.editar_item){
    var global = this;
    this.lista.forEach(function(item, index){
      if(global.lista.id === item.id){
        global.lista[index] = global.conductor;

      }
    })
    this.conductor = {id:null, nombre:null, usuario : null, clave : null, apellido:null, correo:null, cedula:null, celular:null, telefon:null, direccion:null, vehiculo:null};
    this.crear_conductor = false;
    this.editar_conductor = true;

  }else{
    for(var contador = 1; contador<this.lista.length; contador = contador + 1){
       contador;
    }
    this.conductor.id = contador;
    this.lista.push(this.conductor);
    this.conductor = {id:null, nombre:null, usuario : null, clave : null, apellido:null, correo:null, cedula:null, celular:null, telefon:null, direccion:null, vehiculo:null}
  }
  this.editar_item = false;
}

eliminarUsuario(usuario){
  this.conductor = usuario;
  var elim = this;
  this.lista.forEach(function(item, index){
    if(item.id === elim.conductor.id){
      elim.lista.splice(index, 1);
    }
  });
  this.conductor={id:null, nombre:null, usuario : null, clave : null, apellido:null, correo:null, cedula:null, celular:null, telefon:null, direccion:null, vehiculo:null};
}


 crear(){
   this.crear_conductor = true;
   this.editar_conductor = false;
   this.ver_conductor = false;
   this.eliminar_conductor = false;
 }
 
 editar(){
   this.crear_conductor = false;
   this.editar_conductor = true;
   this.ver_conductor = false;
   this.eliminar_conductor = false;
 }
 ver(){
   this.crear_conductor = false;
   this.editar_conductor = false;
   this.ver_conductor = true;
   this.eliminar_conductor = false;
 }
 eliminar(){
   this.crear_conductor = false;
   this.editar_conductor = false;
   this.ver_conductor = false;
   this.eliminar_conductor = true;
 }

 

 editarUsuario(conductor){
   this.conductor = conductor;
   this.crear_conductor = true;
   this.editar_conductor = false;
   this.editar_item = true;
 }

 
}
