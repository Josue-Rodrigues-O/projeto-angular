import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-detalhes-do-curso',
  standalone: true,
  imports: [],
  templateUrl: './pagina-detalhes-do-curso.component.html',
  styleUrl: './pagina-detalhes-do-curso.component.css'
})
export class PaginaDetalhesDoCursoComponent {
  listaDeVideos = [
    { titulo: "Apresentação do curso", link: "https://www.youtube.com/embed/Ejkb_YpuHWs?si=QI2wbM1vpsGtHkot" },
    { titulo: "Aula 01", link: "https://www.youtube.com/embed/jgQjeqGRdgA?si=AbfflSu_TigL-aib" },
    { titulo: "Aula 02", link: "https://www.youtube.com/embed/VfIXgGJWLvA?si=BAnlo3o5-xxRQyVR" },
    { titulo: "Aula 03", link: "https://www.youtube.com/embed/57wyfS560Uk?si=xOZ3CwonVPNu5Mq6" },
    { titulo: "Aula 01", link: "https://www.youtube.com/embed/jgQjeqGRdgA?si=AbfflSu_TigL-aib" },
    { titulo: "Aula 02", link: "https://www.youtube.com/embed/VfIXgGJWLvA?si=BAnlo3o5-xxRQyVR" },
    { titulo: "Aula 03", link: "https://www.youtube.com/embed/57wyfS560Uk?si=xOZ3CwonVPNu5Mq6" },
    { titulo: "Aula 01", link: "https://www.youtube.com/embed/jgQjeqGRdgA?si=AbfflSu_TigL-aib" },
    { titulo: "Aula 02", link: "https://www.youtube.com/embed/VfIXgGJWLvA?si=BAnlo3o5-xxRQyVR" },
    { titulo: "Aula 03", link: "https://www.youtube.com/embed/57wyfS560Uk?si=xOZ3CwonVPNu5Mq6" },
    { titulo: "Aula 01", link: "https://www.youtube.com/embed/jgQjeqGRdgA?si=AbfflSu_TigL-aib" },
    { titulo: "Aula 02", link: "https://www.youtube.com/embed/VfIXgGJWLvA?si=BAnlo3o5-xxRQyVR" },
    { titulo: "Aula 03", link: "https://www.youtube.com/embed/57wyfS560Uk?si=xOZ3CwonVPNu5Mq6" },
    { titulo: "Aula 04", link: "https://www.youtube.com/embed/0zLjVhHdOm8?si=zMIvtu3V0ysxQIas" }
  ]

  concluido: boolean = false;
  concluidoIcone: string = "radio_button_unchecked";
  concluidoTexto: string = "Marcar como concluido"

  aoClicarNoTitulo(link: any) {
    const video = document.getElementById("video")
    
    video?.setAttribute("src", link)
  }

  aoClicarEmConcluido() {
    if (this.concluido) {
      this.concluidoIcone = "task_alt";
      this.concluido = false;
      this.concluidoTexto = "Concluido"
    }else{
      this.concluidoIcone = "radio_button_unchecked";
      this.concluido = true;
      this.concluidoTexto = "Marcar como concluido"
    }
  }


}
