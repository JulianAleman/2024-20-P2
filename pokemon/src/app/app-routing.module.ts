import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';

const routes: Routes = [
  {path: '', component: TrainerListComponent},
  {path: 'trainers', loadChildren:()=> import ('./trainer/trainer.module').then(m=>m.TrainerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
