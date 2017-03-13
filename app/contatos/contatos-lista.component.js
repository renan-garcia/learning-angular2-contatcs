"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contato_service_1 = require("./contato.service");
var dialog_service_1 = require("../dialog.service");
var ContatosListaComponent = (function () {
    function ContatosListaComponent(contatoService, dialogService) {
        this.contatoService = contatoService;
        this.dialogService = dialogService;
    }
    ContatosListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contatos = [];
        this.contatoService.findAll()
            .then(function (contatos) {
            _this.contatos = contatos;
        })
            .catch(function (erro) {
            console.log(erro);
            _this.mostrarMensagem({ tipo: 'danger', texto: 'Erro ao buscar contatos!' });
        });
    };
    ContatosListaComponent.prototype.onDelete = function (contato) {
        var _this = this;
        this.dialogService.confirm("Deseja deletar o contato " + contato.nome + "?")
            .then(function (canDelete) {
            if (canDelete) {
                _this.contatoService.delete(contato)
                    .then(function (contatoDeletado) {
                    _this.contatos = _this.contatos.filter(function (c) { return c.id != contatoDeletado.id; });
                    _this.mostrarMensagem({ tipo: 'success', texto: 'Contato deletado!' });
                }).catch(function (erro) {
                    console.log(erro);
                    _this.mostrarMensagem({ tipo: 'danger', texto: 'Erro ao deletar contato!' });
                });
            }
        });
        console.log(contato);
    };
    ContatosListaComponent.prototype.mostrarMensagem = function (mensagem) {
        var _this = this;
        this.mensagem = mensagem;
        this.montarClassesDeMensagem(mensagem.tipo);
        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }
        this.currentTimeout = setTimeout(function () {
            _this.mensagem = undefined;
        }, 3000);
    };
    ContatosListaComponent.prototype.montarClassesDeMensagem = function (tipo) {
        this.classesDeMensagem = {
            'alert': true
        };
        this.classesDeMensagem["alert-" + tipo] = true;
    };
    return ContatosListaComponent;
}());
ContatosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contatos-lista',
        templateUrl: 'contatos-lista.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        dialog_service_1.DialogService])
], ContatosListaComponent);
exports.ContatosListaComponent = ContatosListaComponent;
//# sourceMappingURL=contatos-lista.component.js.map