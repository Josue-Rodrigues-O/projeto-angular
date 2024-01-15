import { Component } from '@angular/core';
import { CardCursoComponent } from "../../componentes/card-curso/card-curso.component";

@Component({
    selector: 'app-pagina-meus-cursos',
    standalone: true,
    templateUrl: './pagina-meus-cursos.component.html',
    styleUrl: './pagina-meus-cursos.component.css',
    imports: [CardCursoComponent]
})
export class PaginaMeusCursosComponent {

}
