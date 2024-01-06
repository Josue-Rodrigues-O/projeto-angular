import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { MeusCursosComponent } from "../meus-cursos/meus-cursos.component";

@Component({
    selector: 'app-pagina-meus-cursos',
    standalone: true,
    templateUrl: './pagina-meus-cursos.component.html',
    styleUrl: './pagina-meus-cursos.component.css',
    imports: [BarraSuperiorComponent, MeusCursosComponent]
})
export class PaginaMeusCursosComponent {

}
