import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCargasComponent } from './alumno-cargas.component';

describe('AlumnoCargasComponent', () => {
  let component: AlumnoCargasComponent;
  let fixture: ComponentFixture<AlumnoCargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoCargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
