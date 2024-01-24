import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-detalhes-do-curso',
  standalone: true,
  imports: [],
  templateUrl: './pagina-detalhes-do-curso.component.html',
  styleUrl: './pagina-detalhes-do-curso.component.css'
})
export class PaginaDetalhesDoCursoComponent {
  concluido: boolean = false;
  concluidoTexto: string = "Marcar como concluido"
  adicionado: boolean = false
  adicionarTexto: string = "Adicionar aos meus cursos"
  classeBotaoAdicionar = "botao-verde"

  listaDeVideos = [
    { id: 1, titulo: "Começa aqui o novo @CursoemVideo de HTML5 e CSS3", link: "https://www.youtube.com/embed/Ejkb_YpuHWs?si=QI2wbM1vpsGtHkot", concluido: false },
    { id: 2, titulo: "O que vamos aprender no módulo 01? - @Curso em Vídeo HTML5 + CSS3", link: "https://www.youtube.com/embed/jgQjeqGRdgA?si=AbfflSu_TigL-aib", concluido: false },
    { id: 3, titulo: "Precisamos fazer um acordo - @Curso em Vídeo HTML5 e CSS3", link: "https://www.youtube.com/embed/VfIXgGJWLvA?si=BAnlo3o5-xxRQyVR", concluido: false },
    { id: 4, titulo: "Será que este curso é para mim? - @Curso em Vídeo HTML5 e CSS3", link: "https://www.youtube.com/embed/57wyfS560Uk?si=xOZ3CwonVPNu5Mq6", concluido: false }
  ]

  TituloVideo: string = this.listaDeVideos[0].titulo;
  idVideoSelecionado = 1;

  aoClicarNoTitulo(item: any) {
    const video = document.getElementById("video")
    this.idVideoSelecionado = item.id;
    video?.setAttribute("src", item.link)
    this.concluido = item.concluido
    this.TituloVideo = item.titulo

    if (item.concluido) {
      this.concluidoTexto = "Concluido"
    } else {
      this.concluidoTexto = "Marcar como concluido"
    }
  }

  aoClicarEmConcluido() {
    if (!this.concluido) {
      let index = this.listaDeVideos.findIndex(x => x.id == this.idVideoSelecionado);
      this.listaDeVideos[index].concluido = !this.concluido;
      this.concluidoTexto = "Concluido"
      this.concluido = true;
    } else {
      let index = this.listaDeVideos.findIndex(x => x.id == this.idVideoSelecionado);
      this.listaDeVideos[index].concluido = !this.concluido;
      this.concluidoTexto = "Marcar como concluido"
      this.concluido = false;
    }
  }

  aoClicarEmAdicionar() {
    if(this.adicionado){
      this.adicionarTexto = "Adicionar aos meus cursos"
      this.classeBotaoAdicionar = "botao-verde";
      this.adicionado = !this.adicionado
    }else{
      this.adicionarTexto = "Remover dos meus cursos"
      this.classeBotaoAdicionar = "botao-vermelho";
      this.adicionado = !this.adicionado
    }
  }
}
