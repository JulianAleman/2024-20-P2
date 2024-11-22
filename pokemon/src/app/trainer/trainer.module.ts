import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { PokemonModule } from '../pokemon/pokemon.module';
import { TrainerRoutingModule } from './trainer-routing.module';

@NgModule({
  imports: [CommonModule, PokemonModule, TrainerRoutingModule],
  declarations: [TrainerListComponent, TrainerDetailComponent],
  exports: [TrainerListComponent],
})
export class TrainerModule {}
