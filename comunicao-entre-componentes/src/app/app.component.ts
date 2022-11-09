import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicao-entre-componentes';
  
  
  //Método
  mostrarMsg() {
    alert('O upload foi concluido com sucesso.')
  }
}
