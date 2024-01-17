import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-curso',
  standalone: true,
  imports: [],
  templateUrl: './card-curso.component.html',
  styleUrl: './card-curso.component.css'
})
export class CardCursoComponent {

  constructor(private route: Router) {}
  aoClicarNoCard() {
    this.route.navigate(['detalhes-do-curso'])
  }
}
