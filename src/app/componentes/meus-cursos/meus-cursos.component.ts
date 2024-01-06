import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-meus-cursos',
    standalone: true,
    templateUrl: './meus-cursos.component.html',
    styleUrl: './meus-cursos.component.css',
    imports: [CardComponent]
})
export class MeusCursosComponent {

}
