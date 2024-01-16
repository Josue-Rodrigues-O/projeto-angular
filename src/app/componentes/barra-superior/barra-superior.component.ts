import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-barra-superior',
    standalone: true,
    templateUrl: './barra-superior.component.html',
    styleUrl: './barra-superior.component.css',
    imports: [MenuLateralComponent]
})
export class BarraSuperiorComponent {

  menuLateralAberto: boolean = false
  constructor(private route: Router) { }

  public usuarioEstaLogado: boolean = false

  aoClicarEmCadastrar() {
    this.route.navigate(['/cadastro'])
  }

  aoClicarAbreMenuLateral() {
    this.menuLateralAberto = !this.menuLateralAberto
  }
}
