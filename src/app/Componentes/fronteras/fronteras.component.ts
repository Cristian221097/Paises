import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-fronteras',
  templateUrl: './fronteras.component.html',
  styleUrls: ['./fronteras.component.css']
})
export class FronterasComponent implements OnInit {

  @Input() informacion:any;

  constructor() { }

  ngOnInit(){
  }

}
