import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        console.log('iniciaste sesion');
        console.log(res);
        this.router.navigate(['/profile']);
      }).catch((err) => {
        console.log(err);
      })
  }

  onSubmitGoogle() {
    this.authService.loginGoogle()
    .then((res) => {
      this.router.navigate(['/profile']);
      }).catch((err) => {
        console.log(err);
      })
  }
  onSubmitFace(){
    this.authService.loginFacebook()
    .then((res) => {
      this.router.navigate(['/profile']);
      }).catch((err) => {
        console.log(err);
      })
  }
}
