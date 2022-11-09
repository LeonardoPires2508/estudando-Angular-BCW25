import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  banner: string = 'https://media.istockphoto.com/id/1354157284/pt/foto/male-engineers-walking-along-rows-of-photovoltaic-panels.jpg?s=612x612&w=0&k=20&c=82UqXSoONgAluU1l-Iy9TMYZL28YYSAVr9EzjHHRiWI='
  @Input() // propriedade de um componente recebe valor externo a classe;
  titulo: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, esse.'
  @Input()
  username: string = 'Leonardo Pires'
  @Input()
  userFoto: string = '../../assets/Leonardo Pires.jpeg'
  
  @Input()
  corBtn: string = 'black'

  constructor() { }

  ngOnInit(): void {
  }

}
