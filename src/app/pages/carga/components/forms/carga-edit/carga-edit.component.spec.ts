import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEditComponent } from './carga-edit.component';

describe('CargaEditComponent', () => {
  let component: CargaEditComponent;
  let fixture: ComponentFixture<CargaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
