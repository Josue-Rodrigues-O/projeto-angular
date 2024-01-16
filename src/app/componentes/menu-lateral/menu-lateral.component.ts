import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
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
}