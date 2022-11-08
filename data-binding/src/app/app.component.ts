import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String Interpolation: utilizar valores que propriedades 
   * possuem para mostra-los para o usuario.
   */

  /**
   * Property Binding: utilizar valores de propriedades 
   * para atribui-los a atributos html
   */

  /**
   * Event Binding é utilizado para ouvir elementos da DOM
   */

  /**
   * Two-way Data Binding, 
   */
  title = 'Angular é muito chique!';
  n1: number = 300;
  n2: number = 500;
  n3: number = 0;
  n4: number = 0;

  somar (x: number, y: number): number {
    return x + y
  }

  tipoInput: string = 'text'

  mudarTipoDoInput(): void {
    if (this.tipoInput == 'password') {
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }



}
