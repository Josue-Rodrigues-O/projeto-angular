import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from "./componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, BarraSuperiorComponent, RodapeComponent]
})
export class AppComponent {
}
