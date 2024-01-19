import { Component } from '@angular/core';
import { CardCursosMarketplaceComponent } from "../../componentes/card-cursos-marketplace/card-cursos-marketplace.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { CardCursoComponent } from "../../componentes/card-curso/card-curso.component";

@Component({
    selector: 'app-pagina-marktplace',
    standalone: true,
    templateUrl: './pagina-marktplace.component.html',
    styleUrl: './pagina-marktplace.component.css',
    imports: [CardCursosMarketplaceComponent, RodapeComponent, CardCursoComponent]
})
export class PaginaMarktplaceComponent {

}
