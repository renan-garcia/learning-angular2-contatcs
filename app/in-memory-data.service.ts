import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Contato } from './contatos/contato.model'

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {

    let contatos: Contato[] = [
      {id: 1, nome: 'Renan Garcia', email: 'renan@email.com', telefone: '(00) 0000-0000'},
      {id: 2, nome: 'Paloma Garcia', email: 'paloma@email.com', telefone: '(00) 0000-0000'},
      {id: 3, nome: 'Draco Garcia', email: 'draco@email.com', telefone: '(00) 0000-0000'},
      {id: 4, nome: 'Eduardo Garcia', email: 'eduardo@email.com', telefone: '(00) 0000-0000'},
      {id: 5, nome: 'Debora Garcia', email: 'debora@email.com', telefone: '(00) 0000-0000'}
    ];

    // os dois modos se equivalem
    return {'contatos': contatos};
    //return {contatos};
  }


}