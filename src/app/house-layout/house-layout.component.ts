import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Room } from '../interfaces/room.interface';

@Component({
  selector: 'app-house-layout',
  templateUrl: './house-layout.component.html',
  styleUrls: ['./house-layout.component.scss'],
})
export class HouseLayoutComponent implements OnInit {
  houseLayout: Array<Room> = [
    { name: 'kitchen' },
    { name: 'bathroom' },
    { name: 'bedroom1' },
    { name: 'livingroom' },
    { name: 'bedroom2' },
    { name: 'balcony' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
