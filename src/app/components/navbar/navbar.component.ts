import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public photo: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUser = auth.email;
        if (!auth.displayName) {
          this.nameUser = 'User';
        } else {
          this.nameUser = auth.displayName;
        }
        if (!auth.photoURL) {
          this.photo = 'https://raw.githubusercontent.com/DiLeyRa/red-social-angular/master/src/images/perfil.png';
        } else    {
          this.photo = auth.photoURL;
        }
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.authService.logOut();
  }

}
