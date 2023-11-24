import { Component, Input, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio/dinosaurio';

@Component({
  selector: 'app-dinosaurio-detail',
  templateUrl: './dinosaurio-detail.component.html',
  styleUrls: ['./dinosaurio-detail.component.css']
})
export class DinosaurioDetailComponent implements OnInit {

  @Input() dinosaurio!: Dinosaurio;

  constructor() { }

  ngOnInit() {
  }

}
