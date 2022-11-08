/**
 * TODO COMPONENTE DO ANGULAR É REPRESENTADO POR UMA CLASSE
 */

import { Component } from "@angular/core";

@Component ({
    selector: 'card-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css'] //é um array porque pode ter mais de um css linkado a ele.
})
export class ProdutoComponent {

}