import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaNewComponent } from './carga-new.component';

describe('CargaNewComponent', () => {
  let component: CargaNewComponent;
  let fixture: ComponentFixture<CargaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
