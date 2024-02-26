import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
    constructor(private http: HttpClient) { }
ngOnInit(): void {
       const token = localStorage.getItem('token');
         const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    this.http.get<any>('http://localhost:8000/actores/', { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}
