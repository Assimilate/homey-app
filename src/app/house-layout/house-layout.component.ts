import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { House } from '../interfaces/house.interface';
import { Room } from '../interfaces/room.interface';
import { Measurement } from '../interfaces/measurement.interface';
import { RoomComponent } from './room/room.component';
import { Timer } from '../utils/timer';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-house-layout',
  templateUrl: './house-layout.component.html',
  styleUrls: ['./house-layout.component.scss'],
})
export class HouseLayoutComponent implements OnInit {
  mode: ProgressSpinnerMode = 'indeterminate';
  houseLayout!: House | undefined;
  timer!: ReturnType<typeof setInterval> | null;

  maxMeasurementsToShow: number = 5;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.startAPICalls();
    }, 1000);
  }

  getHouseData() {
    this.http.get('https://localhost:5001/api/houses/1/data').subscribe(
      (response) => {
        let newHouseLayout = response as House;
        this.houseLayout = newHouseLayout;
      },
      (error) => console.error(error),
      () => console.log()
    );
  }

  startAPICalls() {
    if (!Timer.getTimer()) {
      this.timer = setInterval(async () => {
        await this.getHouseData();
      }, 1000);
      Timer.setTimer(this.timer);
    } else {
      this.timer = Timer.getTimer();
    }
  }
  stopAPICalls() {
    clearInterval(this.timer as ReturnType<typeof setInterval>);
    if (Timer.getTimer()) {
      Timer.setTimer(null);
    }
  }
}
