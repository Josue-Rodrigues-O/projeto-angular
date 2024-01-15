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
  menuLateral = "menu-lateral"
  menuAberto = false

  constructor(private route: Router) { }

  public usuarioEstaLogado: boolean = false

  aoClicarEmCadastrar() {
    this.route.navigate(['/cadastro'])
  }

  aoClicarAbreMenuLateral() {
    if (!this.menuAberto) {
      this.menuLateral = "menu-aberto"
      this.menuAberto = true
    } else {
      this.menuLateral = "menu-lateral"
      this.menuAberto = false
    }
  }
}
