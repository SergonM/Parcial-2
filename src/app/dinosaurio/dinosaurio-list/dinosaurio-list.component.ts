import { Component, OnInit } from '@angular/core';
import { DinosaurioService } from '../dinosaurio.service';
import { Router } from '@angular/router';
import { Dinosaurio } from '../dinosaurio';

@Component({
  selector: 'app-dinosaurio-list',
  templateUrl: './dinosaurio-list.component.html',
  styleUrls: ['./dinosaurio-list.component.css']
})
export class DinosaurioListComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  carnivoros: number = 0;
  herviboros: number = 0;
  dinoSelect: Dinosaurio = null!;
  seleccionado: boolean = false;

  constructor(private dinosaurioService: DinosaurioService, private router: Router) { }

  getDino(){
    this.dinosaurioService.getDinos().subscribe((dinos) => {
      this.dinosaurios = dinos;
      this.calcular();
    });
  }

  calcular(){
    this.dinosaurios.forEach((dinosaurio) => {
      if (dinosaurio.feeding == 'Carnivoro'){
        this.carnivoros += 1;
      }
      else{
        this.herviboros += 1;
      }
    });
  }

  onSelected(dinosaurio: Dinosaurio){
    this.dinoSelect = dinosaurio;
    this.seleccionado = true;

  }

  ngOnInit() {
    this.getDino();
  }
}
