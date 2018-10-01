import { Component, OnInit } from '@angular/core';
import { Contato } from './Contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Array<Contato>;
  constructor() {
  this.contatos = new Array<Contato>();
  }
  ngOnInit() {
  this.carregar();
  }
  carregar() {
  let contato = new Contato('Sidney Sousa', '9111-2222', 'Rua 7 de outubro, 23');
  this.contatos.push(contato);
  contato = new Contato('Diego Santana', '9222-3333', 'Rua 15 de julho, 81');
  this.contatos.push(contato);
  contato = new Contato('Lucas Negri', '9333-4444', 'Rua 18 de janeiro, 57');
  this.contatos.push(contato);
   }
  }