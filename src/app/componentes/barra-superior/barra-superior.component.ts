import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent {
  constructor(private route: Router) { }

  public usuarioEstaLogado: boolean = false

  aoClicarEmCadastrar() {
    this.route.navigate(['/cadastro'])
  }
}
