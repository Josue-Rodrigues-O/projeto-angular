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

  aoClicarEmMarktplace() {
    this.route.navigate(['/marketplace'])
  }

  aoClicarEmMeusCursos() {
    this.route.navigate(['/meus-cursos'])
  }
}