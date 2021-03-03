import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-leguanjes',
  templateUrl: './leguanjes.component.html',
  styleUrls: ['./leguanjes.component.css']
})
export class LeguanjesComponent implements OnInit {

  @Input() informacion:any;

  constructor() { }

  ngOnInit(): void {
  }

}
