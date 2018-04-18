/*
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Injectable } from '@angular/core';


@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
@Injectable()
export class UsuariosNuevoComponent {

  comprovar:boolean = true;
  formulario_usuario:boolean = false;
  lista_usuarios:boolean = false
  ingresar_usuarios:boolean = false;
  usuario: any = {id:null, nombre:null,clave:null};

  public lista: any =[
    {id:0, nombre:'jose', clave:'1234'},
    {id:1, nombre:'camilo', clave:'1234'}
  ];

  getLista() {
    return this.lista;
  }


  ingresar(){
    this.ingresar_usuarios = false;
    this.formulario_usuario = true;
    this.lista_usuarios = false;
  }

  crear(){
    this.ingresar_usuarios = false;
    this.formulario_usuario = false;
    this.lista_usuarios = true;
  }

  crearUsuario(){
    this.lista.push(this.usuario);
  }

  ingresarUsuario(){
    var global = this;
    this.lista.forEach(function(item, index){
      if(global.comprovar){
        if(item.nombre === global.usuario.nombre){
          alert("encontrado");
          global.comprovar = false;
        }
      }
    })
  }


}
*/