import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-login-logon',
  standalone: true,
  imports: [],
  templateUrl: './pagina-login-logon.component.html',
  styleUrl: './pagina-login-logon.component.css'
})
export class PaginaLoginLogonComponent {
  private Email: string = '';
  private Senha: string = '';
  private ConfirmarSenha: string = '';


  constructor(
    private router: Router
  ){}

  navegarParaMeusCursos(){
    this.router.navigate(['/MeusCursos'])
  }

  cadastrarUsuario(){

  }
}
