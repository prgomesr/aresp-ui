import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-diario',
  templateUrl: './caixa-diario.component.html',
  styleUrls: ['./caixa-diario.component.css']
})
export class CaixaDiarioComponent implements OnInit {

  lancamentos = [
    {id: 1, instancia: 'Maria Magda Silva', descricao: '', }
  ];

  constructor() { }

  ngOnInit() {
  }

}
