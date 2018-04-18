import {Component, Inject, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Injectable } from '@angular/core';


@Component({
  selector: 'usuarios-component',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent { 
  
  usuarios =    {usuario}
  login = true;

  lista = [ 
    { usuario: "jose"}
   ];

  crear(){   
     // this.lista.push(this.usuarios);    
    
  }
  entrar(){    
    var buscarUsuario = this;
    this.lista.forEach(function(buscar,index){
      if(buscar.usuario === buscarUsuario.usuarios.usuario){        
        buscarUsuario.login = false;
      }else{
        buscarUsuario.login = true;
        
      }
    });
  }

}

