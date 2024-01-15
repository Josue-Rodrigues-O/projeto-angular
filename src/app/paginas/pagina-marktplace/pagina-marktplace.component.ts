import { Component } from '@angular/core';
import { CardCursosMarketplaceComponent } from "../../componentes/card-cursos-marketplace/card-cursos-marketplace.component";

@Component({
    selector: 'app-pagina-marktplace',
    standalone: true,
    templateUrl: './pagina-marktplace.component.html',
    styleUrl: './pagina-marktplace.component.css',
    imports: [CardCursosMarketplaceComponent]
})
export class PaginaMarktplaceComponent {

}
