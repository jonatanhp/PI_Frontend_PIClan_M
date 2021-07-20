import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmatriculaNewComponent } from './cmatricula-new.component';

describe('CmatriculaNewComponent', () => {
  let component: CmatriculaNewComponent;
  let fixture: ComponentFixture<CmatriculaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmatriculaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmatriculaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
