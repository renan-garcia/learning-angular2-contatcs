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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var contato_service_1 = require("./contato.service");
var contato_model_1 = require("./contato.model");
var ContatoDetalheComponent = (function () {
    function ContatoDetalheComponent(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ContatoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contato = new contato_model_1.Contato(0, '', '', '');
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.isNew = false;
                _this.contatoService.find(id)
                    .then(function (contato) {
                    _this.contato = contato;
                });
            }
        });
    };
    ContatoDetalheComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    ContatoDetalheComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    ContatoDetalheComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise;
        if (this.isNew) {
            promise = this.contatoService.create(this.contato);
        }
        else {
            promise = this.contatoService.update(this.contato);
        }
        promise.then(function (contato) { return _this.goBack(); });
    };
    ContatoDetalheComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ContatoDetalheComponent;
}());
ContatoDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contato-detalhe',
        templateUrl: 'contato-detalhe.component.html',
        styleUrls: [
            'contato-detalhe.component.css'
        ]
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        router_1.ActivatedRoute,
        common_1.Location])
], ContatoDetalheComponent);
exports.ContatoDetalheComponent = ContatoDetalheComponent;
//# sourceMappingURL=contato-detalhe.component.js.map