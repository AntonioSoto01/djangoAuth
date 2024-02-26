import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";

  constructor(private http: HttpClient, private router: Router) {}


  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8000/api-token-auth/', credentials)
      .subscribe(
        response => {
          // Manejar la respuesta aquí
         // console.log('Token de autenticación:', response.token);
          localStorage.setItem('token',response.token)
            this.router.navigate(['/actors']);
        },
        error => {
          console.error('Error al iniciar sesión:', error);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      );
  }
}

