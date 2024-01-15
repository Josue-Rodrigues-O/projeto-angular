import { Routes } from '@angular/router';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { PaginaMeusCursosComponent } from './paginas/pagina-meus-cursos/pagina-meus-cursos.component';

export const routes: Routes = [
    {path: '', component: PaginaLoginComponent},
    {path: 'meus-cursos', component: PaginaMeusCursosComponent}
];