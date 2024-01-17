import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-cursos-marketplace',
  standalone: true,
  imports: [],
  templateUrl: './card-cursos-marketplace.component.html',
  styleUrl: './card-cursos-marketplace.component.css'
})
export class CardCursosMarketplaceComponent {
  constructor(private route: Router) {}
  aoClicarNoCard() {
    this.route.navigate(['detalhes-do-curso'])
  }
}
