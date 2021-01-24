import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseLayoutComponent } from './house-layout/house-layout.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

const routes: Routes = [
  { path: '', component: HouseLayoutComponent },
  { path: 'details/:name', component: RoomDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule],
})
export class AppRoutingModule {}
