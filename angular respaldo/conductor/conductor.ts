import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { MenuComponent } from '../layout/menu/menu';


@Component({
  selector: 'conductor_modulo',
  templateUrl: './conductor.html',
  styleUrls: ['./conductor.css']
})


export class ConductorComponent {
/*
constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
*/


  conductor: any = {id:null, nombre:null, apellido:null, correo:null, cedula:null, celular:null, telefon:null, direccion:null, vehiculo:null};
  crear_conductor: boolean = false;
  editar_conductor: boolean = false;
  ver_conductor: boolean = false;
  eliminar_conductor: boolean = false;
  editar_item: boolean = false;

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

  lista: any = [
    {id:0,nombre:'jose luis',apellido:'castañeda',correo:'jose@gmail.com',cedula:1234334, celular:39832, direccion:'carre 43 n 75'},
    {id:1,nombre:'carlos manuel',apellido:'Smith',correo:'smit@hotmail.com',cedula:1234334, celular:39832, direccion:'carre 43 n 75'}
  ];

  editarUsuario(conductor){
    this.conductor = conductor;
    this.crear_conductor = true;
    this.editar_conductor = false;
    this.editar_item = true;
  }
}
/*
  crearUsuario(){
    if(this.editar_item){
      var global = this;
      this.lista.forEach(function(item, index){
        if(global.lista.id === item.id){
          global.lista[index] = global.conductor;

        }
      })
      this.conductor = {id:null, nombre:null, apellido:null, correo:null, cedula:null, celular:null, telefon:null, direccion:null, vehiculo:null};
      this.crear_conductor = false;
      this.editar_conductor = true;

    }else{
      for(var contador = 1; contador<this.lista.length; contador = contador + 1){
         contador;
      }
      this.conductor.id = contador;
      this.lista.push(this.conductor);
      this.conductor = {id:null, nombre:null, apellido:null, correo:null, cedula:null, celular:null, telefon:null, direccion:null, vehiculo:null}
    }
    this.editar_item = false;
  }
*/

/*

@Component({
  selector: 'modal',
  templateUrl: './modal.html',

})

export class ModalComponent(){
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
*/
