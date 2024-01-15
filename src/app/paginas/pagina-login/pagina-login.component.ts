import { Component } from '@angular/core';
import { BarraSuperiorComponent } from '../../componentes/barra-superior/barra-superior.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [BarraSuperiorComponent],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {
  constructor(private route: Router){}

  aoClicarEmAcessar(){
    this.route.navigate(['/meus-cursos'])
  }
}
