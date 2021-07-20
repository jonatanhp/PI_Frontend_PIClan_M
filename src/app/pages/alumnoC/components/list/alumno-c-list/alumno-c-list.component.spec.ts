import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCListComponent } from './alumno-c-list.component';

describe('AlumnoCListComponent', () => {
  let component: AlumnoCListComponent;
  let fixture: ComponentFixture<AlumnoCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoCListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
