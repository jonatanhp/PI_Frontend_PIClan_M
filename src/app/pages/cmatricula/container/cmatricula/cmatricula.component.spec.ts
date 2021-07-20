import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmatriculaComponent } from './cmatricula.component';

describe('CmatriculaComponent', () => {
  let component: CmatriculaComponent;
  let fixture: ComponentFixture<CmatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
