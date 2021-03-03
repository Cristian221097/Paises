import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {

  @Input() informacion:any;

  constructor() { }

  ngOnInit(): void {
  }

}
