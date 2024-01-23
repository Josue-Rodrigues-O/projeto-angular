import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositorioService {
  constructor(private http: HttpClient) { }

  obterCursos() {
    this.http.get<any>('https://localhost:7263/api/Cursos/ObterCursos').subscribe((data) => console.log(data));
  }
}

//'https://localhost:7263/api/Cursos/ObterCursos'
//'https://jsonplaceholder.typicode.com/todos/1'