import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  
  edit = false;
  campo = false;
  usuario =    {id: null,nombre : null, cargo: null}

  lista = [
    {id:1, nombre:'a', cargo:'a'},
    {id:2, nombre:'b', cargo:'b'},
    {id:3, nombre:'c', cargo:'c'},
  ];

  nuevo(){
    this.campo= true;
  }
  crear(){
    if(this.edit){
      var elemento = this;
      this.lista.forEach(function(el, i){
        if(el.id === elemento.usuario.id){
          elemento.lista[i] = elemento.usuario;
        }
      });
      elemento.campo=false;
      this.edit= false;
      this.usuario={id:null,nombre:null, cargo:null};
    }else{

      this.lista.push(this.usuario);
      this.campo= false;
      this.usuario={id:null,nombre:null, cargo:null};
    }
  }

  editar(usuario){
    this.usuario= usuario;
    this.edit= true;
    this.campo = true;
  }

  eliminar(usuario){
    this.usuario = usuario;
    var elim = this;
    this.lista.forEach(function(item, index){
      if(item.id === elim.usuario.id){
        elim.lista.splice(index, 1);
      }
    });
    this.usuario={id:null,nombre:null, cargo:null};
  }
  
}
