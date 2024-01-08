import { Routes } from '@angular/router';
import { PaginaLoginLogonComponent } from './componentes/pagina-login-logon/pagina-login-logon.component';
import { PaginaMeusCursosComponent } from './componentes/pagina-meus-cursos/pagina-meus-cursos.component';

export const routes: Routes = [
    {path: '', component: PaginaLoginLogonComponent},
    {path: 'MeusCursos', component: PaginaMeusCursosComponent}
];