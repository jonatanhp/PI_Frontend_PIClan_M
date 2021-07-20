import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoEditComponent } from './periodo-edit.component';

describe('PeriodoEditComponent', () => {
  let component: PeriodoEditComponent;
  let fixture: ComponentFixture<PeriodoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
