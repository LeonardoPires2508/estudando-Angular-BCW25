import { Component } from '@angular/core';

/**
 * decorator é uma função que faz com que a classe se comporte como um componente do angular - 
 * comportamento especifico que o  
 * 
 * template url, serve para informar ao componente 
 * qual arquivo html deve mostrar quando o mesmo 
 * for utilizado
 * 
 * stylesUrl serve para informar os caminhos dos
 * arquivos css que o componente utilizará
 * 
 * selector serve para informar como aquele componente podera
 * ser chamado dentro do projeto angular dentro de outros arquivos
 * htlm de outros componentes.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * todo componente é representado por uma classe
 */
export class AppComponent {
  title = 'primeiro-projeto';
}
