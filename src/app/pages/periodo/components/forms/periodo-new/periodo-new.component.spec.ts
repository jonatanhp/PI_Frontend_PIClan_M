import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoNewComponent } from './periodo-new.component';

describe('PeriodoNewComponent', () => {
  let component: PeriodoNewComponent;
  let fixture: ComponentFixture<PeriodoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
