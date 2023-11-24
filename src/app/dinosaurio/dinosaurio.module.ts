import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosaurioListComponent } from './dinosaurio-list/dinosaurio-list.component';
import { DinosaurioDetailComponent } from '../dinosaurio-detail/dinosaurio-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DinosaurioListComponent],
  declarations: [DinosaurioListComponent, DinosaurioDetailComponent]
})
export class DinosaurioModule { }
