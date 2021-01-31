import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Room } from '../interfaces/room.interface';

interface Measurement {
  temperature: string;
}

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.name = this.route.snapshot.params.name;

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { room: Room };
    this.temperature = state.room.temperature;
  }

  name!: string;
  temperature!: string;
}
