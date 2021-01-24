import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../interfaces/room.interface';

interface Measurement {
  temperature: number;
  timestamp: Date | string;
}

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  name!: string;
  measurements: Measurement[] = [];
  shownMeasurements: Measurement[] = [];
  maxMeasurementsShown: number = 5;
  retrieved: boolean = false;
  timer!: ReturnType<typeof setInterval>;
  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
    this.startAPICalls();
  }
  startAPICalls() {
    this.timer = setInterval(() => {
      const temperature: number = Math.random() * 40;
      const timestamp: Date = new Date();
      const timestampToShow =
        timestamp.getHours() +
        ':' +
        timestamp.getMinutes() +
        ':' +
        timestamp.getSeconds();
      const measurement: Measurement = {
        temperature: temperature,
        timestamp: timestampToShow,
      };
      this.addToMeasurements(measurement);
    }, 3000);
  }
  stopAPICalls() {
    clearInterval(this.timer);
  }
  addToMeasurements(measurement: Measurement) {
    if (!this.retrieved) this.retrieved = true;
    this.measurements.unshift(measurement);
    this.shownMeasurements.unshift(measurement);
    if (this.shownMeasurements.length > this.maxMeasurementsShown)
      this.shownMeasurements.pop();
  }
}
