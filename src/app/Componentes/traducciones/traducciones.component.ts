import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-traducciones',
  templateUrl: './traducciones.component.html',
  styleUrls: ['./traducciones.component.css']
})
export class TraduccionesComponent implements OnInit {
  @Input() informacion:any;

  constructor() { }

  ngOnInit(): void {
  }

}
