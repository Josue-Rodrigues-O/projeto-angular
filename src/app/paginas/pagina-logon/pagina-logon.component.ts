import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-logon',
  standalone: true,
  imports: [],
  templateUrl: './pagina-logon.component.html',
  styleUrl: './pagina-logon.component.css'
})
export class PaginaLogonComponent {
  constructor(private route: Router) {}

  aoClicarIrParaMeusCursos() {
    this.route.navigate(['/meus-cursos'])
  }
}
