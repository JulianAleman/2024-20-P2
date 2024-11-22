import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;

  constructor(private trainerService: TrainerService){}

  getTraunersList(): void {
    this.trainerService.getBooks().subscribe((trainers) => {this.trainers = trainers});
    console.log(this.trainers)
  }

  ngOnInit() {
    this.getTraunersList();
  }

  onSelected(trainer: Trainer):void {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
