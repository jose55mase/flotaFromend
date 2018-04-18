import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModelo } from '../modelo/usuario.modelo';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioServicios {
    public usuario :Array<UsuarioModelo>;

    constructor(public http : HttpClient){

    }
    public getUsuario() : Observable<UsuarioModelo[]>{
        return this.http.get<UsuarioModelo[]>('http://localhost:8080/getUsuario');
        
    }
}