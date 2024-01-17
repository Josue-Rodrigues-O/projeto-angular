import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  constructor(private route: Router){}

  menuAberto: boolean = false;

  public menuClasses: string = "menu-fechado"

  aoClicarAbreMenuLateral() {
    this.menuAberto = !this.menuAberto
    if (this.menuAberto) {
      this.menuClasses = "menu-aberto"
    } else {
      this.menuClasses = "menu-fechado"
    }
  }

  aoClicarEmMarktplace() {
    this.route.navigate(['/marketplace'])
  }

  aoClicarEmMeusCursos() {
    this.route.navigate(['/meus-cursos'])
  }
}