import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string="";
  password: string="";

  constructor(private http: HttpClient) {}

  register() {
    const newUser = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8000/register/', newUser)
      .subscribe(
        response => {
          console.log('Usuario registrado con éxito:', response);
          // Maneja la respuesta adecuadamente, por ejemplo, redirigiendo al usuario a la página de inicio de sesión
        },
        error => {
          console.error('Error al registrar usuario:', error);
          // Maneja el error adecuadamente, por ejemplo, mostrando un mensaje de error al usuario
        }
      );
  }
}
