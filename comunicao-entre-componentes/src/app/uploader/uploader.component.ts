import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
 /**
  * Event Emitter é uma classe que permite
  * criar eventos customizados dentro do Angular
  */
/**
 * Output, serve para informar que uma propriedade de um componente permita que emita um evento 
 * envie valores pra fora do evento
*/
 @Output()
  uploadCompleto: EventEmitter<string>= new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  fazerUpload(){
    alert('Upload iniciado')
    /**
     * o metodo emit() serve para iniciar a emissaao do
     * evento personalizado
     */
    this.uploadCompleto.emit()
  }
}
