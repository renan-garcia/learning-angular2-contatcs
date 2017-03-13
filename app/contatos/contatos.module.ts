import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ContatoBuscaComponent } from "./contato-busca.component";
import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatoDetalheComponent } from "./contato-detalhe.component";
import { ContatosRoutingModule } from "./contatos-routing.module";
import { ContatoService } from "./contato.service";

@NgModule({
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FormsModule
  ],
  declarations: [
    ContatoBuscaComponent,
    ContatoDetalheComponent,
    ContatosListaComponent
  ],
  exports: [
    ContatoBuscaComponent,
    ContatosListaComponent
  ],
  providers: [
    ContatoService
  ]
})

export class ContatosModule {

}