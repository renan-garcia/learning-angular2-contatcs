import { Component, OnInit } from '@angular/core';

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { DialogService } from "../dialog.service";

@Component({
  moduleId: module.id,
  selector: 'contatos-lista',
  templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {
  currentTimeout: any;
  classesDeMensagem: {};
  mensagem: { tipo: string; texto: string; };

  contatos: Contato[];

  constructor(
    private contatoService: ContatoService,
    private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.contatos = [];
    this.contatoService.findAll()
    .then((contatos: Contato[]) => {
      this.contatos = contatos;
    })
    .catch(erro => {
      console.log(erro);
      this.mostrarMensagem({tipo: 'danger', texto: 'Erro ao buscar contatos!'});
    });
  }

  onDelete(contato: Contato): void{
    this.dialogService.confirm(`Deseja deletar o contato ${contato.nome}?`)
    .then((canDelete: boolean) => {
      if(canDelete){
        this.contatoService.delete(contato)
        .then((contatoDeletado:  Contato) => {
          this.contatos = this.contatos.filter((c: Contato) => c.id != contatoDeletado.id);
          this.mostrarMensagem({tipo: 'success', texto: 'Contato deletado!'})
        }).catch(erro => {
          console.log(erro);
          this.mostrarMensagem({tipo: 'danger', texto: 'Erro ao deletar contato!'})
        })
      }
    });
    console.log(contato);
  }

  private mostrarMensagem(mensagem: {tipo: string, texto: string}): void{
    this.mensagem = mensagem;
    this.montarClassesDeMensagem(mensagem.tipo);
    if(this.currentTimeout){
      clearTimeout(this.currentTimeout);
    }
    this.currentTimeout = setTimeout(() => {
      this.mensagem = undefined;
    }, 3000);
  }

  private montarClassesDeMensagem(tipo: string): void{
    this.classesDeMensagem = {
      'alert': true
    }
    this.classesDeMensagem[`alert-${tipo}`] = true;
  }
}