import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = "Lista | pontos";
  pontos = [
    {
      "titulo": "Morro da Santa",
      "subtitulo": "Mirante de Nossa Senhora dos Humildes",
      "descricao": "O monumento é aberto à visitação e caiu no gosto da população que tem ido rotineiramente ao local.",
      "imagem": "https://3.bp.blogspot.com/-nP2qbB-d-3c/Wlsoit85GuI/AAAAAAAAzj0/XCJzYgEtwOwA7URAmL9OeaD2N32KHWwKACLcBGAs/s1600/morro7.JPG",
      "like": "55",
      "deslike": "1"
    },
    {
      "titulo": "Igreja Matriz",
      "subtitulo": "Paróquia Nossa Senhora dos Humildes",
      "descricao": "O monumento é aberto à visitação e caiu no gosto da população que tem ido rotineiramente ao local para um momento de fe.",
      "imagem": "http://dp15.com/wp-content/uploads/sites/76/2013/08/52.jpg",
      "like": "50",
      "deslike": "1"
    },

  ]
  like(ponto) {
    console.log(ponto.titulo);
  }

  excluir(ponto) {
    var i = this.pontos.indexOf(ponto);
    this.pontos.splice(i, 1);
  }

}
