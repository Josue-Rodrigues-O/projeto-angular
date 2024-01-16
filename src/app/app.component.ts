import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from "./componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { MenuLateralComponent } from "./componentes/menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, BarraSuperiorComponent, RodapeComponent, MenuLateralComponent]
})
export class AppComponent {
}
