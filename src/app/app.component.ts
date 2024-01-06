import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PaginaLoginLogonComponent } from './componentes/pagina-login-logon/pagina-login-logon.component';
import { PaginaMeusCursosComponent } from "./componentes/pagina-meus-cursos/pagina-meus-cursos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PaginaLoginLogonComponent, PaginaMeusCursosComponent]
})
export class AppComponent {
  title = 'projeto-angular';
}
