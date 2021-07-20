import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCNewComponent } from './alumno-c-new.component';

describe('AlumnoCNewComponent', () => {
  let component: AlumnoCNewComponent;
  let fixture: ComponentFixture<AlumnoCNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoCNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
