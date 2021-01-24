import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HouseLayoutComponent } from './house-layout/house-layout.component';
import { RoomComponent } from './house-layout/room/room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HouseLayoutComponent,
    RoomComponent,
    RoomDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
