import { Component, OnInit } from '@angular/core';

import { ConexionService } from '../../servicios/conexion.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public photo: string;

  items:any;
  item:any = {
    mesage:''
  }
  editarItem:any={
    mesage:''
  }


  constructor(private conexion:ConexionService,
    private servicio:ConexionService,
    public authService: AuthService
  ){
    this.conexion.publications().subscribe(item => {
      this.items = item;
      console.log(this.items);
    })
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        if (!auth.displayName) {
          this.nameUser = 'Bienvenid@';
        }else{
          this.nameUser = auth.displayName;
        }
        if(!auth.photoURL){
          this.photo='https://raw.githubusercontent.com/DiLeyRa/red-social-angular/master/src/images/perfil.png';
        }else{
          this.photo = auth.photoURL;
        }
      } else {
        this.isLogin = false;
      }
    });
  }

  agregar(){
    this.servicio.addPublications(this.item);
    this.item.mesage = '';
  }

  eliminar(item){
    this.conexion.delatePublications(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.editPublications(this.editarItem);
  }

}

