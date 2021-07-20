import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoContratosComponent } from './alumno-contratos.component';

describe('AlumnoContratosComponent', () => {
  let component: AlumnoContratosComponent;
  let fixture: ComponentFixture<AlumnoContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
