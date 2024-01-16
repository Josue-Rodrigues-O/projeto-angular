import { Component } from '@angular/core';
import { CardCursoComponent } from "../../componentes/card-curso/card-curso.component";
import { Router } from '@angular/router';
import { RodapeComponent } from "../../componentes/rodape/rodape.component";

@Component({
    selector: 'app-pagina-meus-cursos',
    standalone: true,
    templateUrl: './pagina-meus-cursos.component.html',
    styleUrl: './pagina-meus-cursos.component.css',
    imports: [CardCursoComponent, RodapeComponent]
})
export class PaginaMeusCursosComponent {
    constructor(private route: Router) {}

    aoClicarAdicionar(){
        this.route.navigate(['/marketplace'])
    }
}
