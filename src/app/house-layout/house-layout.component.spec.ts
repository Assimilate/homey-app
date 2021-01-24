import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLayoutComponent } from './house-layout.component';

describe('FloorPlanComponent', () => {
  let component: HouseLayoutComponent;
  let fixture: ComponentFixture<HouseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
