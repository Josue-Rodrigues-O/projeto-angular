import { Routes } from '@angular/router';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { PaginaMeusCursosComponent } from './paginas/pagina-meus-cursos/pagina-meus-cursos.component';
import { PaginaLogonComponent } from './paginas/pagina-logon/pagina-logon.component';
import { PaginaMarktplaceComponent } from './paginas/pagina-marktplace/pagina-marktplace.component';

export const routes: Routes = [
    {path: '', component: PaginaLoginComponent},
    {path: 'meus-cursos', component: PaginaMeusCursosComponent},
    {path: 'cadastro', component: PaginaLogonComponent},
    {path: 'marketplace', component: PaginaMarktplaceComponent}
];