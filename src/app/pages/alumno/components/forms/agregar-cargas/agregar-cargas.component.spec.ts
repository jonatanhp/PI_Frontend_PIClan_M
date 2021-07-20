import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCargasComponent } from './agregar-cargas.component';

describe('AgregarCargasComponent', () => {
  let component: AgregarCargasComponent;
  let fixture: ComponentFixture<AgregarCargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
