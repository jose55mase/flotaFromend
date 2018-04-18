import { Component, OnInit } from '@angular/core';
import { UsuarioModelo } from '../modelo/usuario.modelo';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  constructor(public usuarioServicios : UsuarioService){

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

}
