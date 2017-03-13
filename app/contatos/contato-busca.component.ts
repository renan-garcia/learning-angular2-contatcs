import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Router } from "@angular/router";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";

@Component({
  moduleId: module.id,
  selector: 'contato-busca',
  templateUrl: 'contato-busca.component.html',
  styles: [`
    .user-pointer:hover {
      cursor: pointer;
      z-index: 2;
      color: #fff;
      background-color: #0275d8;
      border-color: #0275d8;
    }
  `]
})
export class ContatoBuscaComponent implements OnInit, OnChanges {
  @Input('minhaBusca')
  busca:string;
  @Output('minhaBuscaChange')
  buscaChange: EventEmitter<string> = new EventEmitter<string>();

  contatos: Observable<Contato[]>;
  private termosDaBusca: Subject<string> = new Subject<string>();

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatos = this.termosDaBusca
    .debounceTime(300) //anguarde por 300ms para emitir novos eventos
    .distinctUntilChanged()
    .switchMap(term => {
    console.log('Fez a busca ',term);
      return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
    })
    .catch(erro => {
      console.log(erro);
      return Observable.of<Contato[]>([]);
    });

    this.contatos
    .subscribe((contatos: Contato[]) => {
      console.log('retornou do servidor os contatos', contatos);
    });
   }

  ngOnChanges(changes: SimpleChanges): void {
    let busca: SimpleChange = changes['busca'];
    this.search(busca.currentValue);
  }

  search(termo){
    this.termosDaBusca.next(termo);
    this.buscaChange.emit(termo);
  }

  verDetalhe(contato: Contato): void {
    let link = ['contato/save', contato.id];
    this.router.navigate(link);
    this.buscaChange.emit('');
  }
}