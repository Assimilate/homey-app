import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../interfaces/room.interface';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  constructor(private router: Router) {}
  @Input() room!: Room;
  navigate() {
    this.router.navigate(['/' + 'details/' + this.room.name]);
  }
}
