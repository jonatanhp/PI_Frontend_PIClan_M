import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmatriculaListComponent } from './cmatricula-list.component';

describe('CmatriculaListComponent', () => {
  let component: CmatriculaListComponent;
  let fixture: ComponentFixture<CmatriculaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmatriculaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmatriculaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
