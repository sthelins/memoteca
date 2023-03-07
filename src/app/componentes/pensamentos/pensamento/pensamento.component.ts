import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //componente filho do componente lista-pensamento
  //esse input esta falando que agora esse componente vai receber informaçoes do componente pai
  @Input() pensamento =
    {
      conteudo: 'I love Angular',
      autoria: "sthe",
      modelo: "modelo3"
    }


  constructor() { }

  ngOnInit(): void {
  }

}
