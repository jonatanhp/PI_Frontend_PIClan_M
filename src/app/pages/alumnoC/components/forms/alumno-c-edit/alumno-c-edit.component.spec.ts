import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCEditComponent } from './alumno-c-edit.component';

describe('AlumnoCEditComponent', () => {
  let component: AlumnoCEditComponent;
  let fixture: ComponentFixture<AlumnoCEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoCEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
