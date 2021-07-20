import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCComponent } from './alumno-c.component';

describe('AlumnoCComponent', () => {
  let component: AlumnoCComponent;
  let fixture: ComponentFixture<AlumnoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
