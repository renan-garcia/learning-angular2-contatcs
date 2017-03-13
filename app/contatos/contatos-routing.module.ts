import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatoDetalheComponent } from "./contato-detalhe.component";

const routes: Routes = [
  { 
    path: 'contato', 
    component: ContatosListaComponent
  },
  { 
    path: 'contato/save', 
    component: ContatoDetalheComponent
  }
  ,
  { 
    path: 'contato/save/:id', 
    component: ContatoDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosRoutingModule { }