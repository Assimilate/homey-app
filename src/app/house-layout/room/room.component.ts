import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Measurement } from 'src/app/interfaces/measurement.interface';
import { Room } from '../../interfaces/room.interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  constructor(private router: Router) {}
  latestMeasurements: Array<string> = [];
  @Input() room!: Room;
  @Output() clicked = new EventEmitter<void>();

  navigate() {
    this.clicked.emit();
    this.router.navigate(['/' + 'details/' + this.room.name], {
      state: { room: this.room },
    });
  }
}
