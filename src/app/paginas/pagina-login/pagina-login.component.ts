import { Component } from '@angular/core';
import { BarraSuperiorComponent } from '../../componentes/barra-superior/barra-superior.component';

@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [BarraSuperiorComponent],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {

}
