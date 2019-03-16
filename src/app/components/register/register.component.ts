import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  //creacion del metodo para el evento del
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then ((res) =>{
      console.log('Excelente');
      console.log(res);
      this.router.navigate(['/profile']);
    }).catch((err) =>{
      console.log(err);

    })
  }
}
