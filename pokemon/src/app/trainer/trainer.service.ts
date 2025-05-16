import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trainer } from './Trainer';
import { dataTrainers } from './dataTrainers';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor() {}

  getTrainers(): Observable<Trainer[]> {
    return of(dataTrainers);
  }

  getTrainer(id: string): Observable<Trainer | undefined> {
    const trainer = dataTrainers.find(tr => tr.id === Number(id));
    return of(trainer);
  }
}

