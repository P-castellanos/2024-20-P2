import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';
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
  constructor( private TrainerSerevice: TrainerService) {}
  getTraunersList(): Array<Trainer> {
    return dataTrainers;
  }

  ngOnInit() {
    this.trainers = this.getTraunersList();
  }

  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
