import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from '../../componentes/barra-superior/barra-superior.component';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { RepositorioService } from '../../servicos/repositorio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [AsyncPipe, BarraSuperiorComponent],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {
  public lista!: Observable<any>;
  constructor(private route: Router, private service: RepositorioService) {
  }

  aoClicarEmAcessar() {
    // this.route.navigate(['/meus-cursos'])
    this.service.obterCursos()
  }
}
