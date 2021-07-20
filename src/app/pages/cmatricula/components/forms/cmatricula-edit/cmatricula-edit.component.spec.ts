import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmatriculaEditComponent } from './cmatricula-edit.component';

describe('CmatriculaEditComponent', () => {
  let component: CmatriculaEditComponent;
  let fixture: ComponentFixture<CmatriculaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmatriculaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmatriculaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
