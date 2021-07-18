import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteEditComponent } from './representante-edit.component';

describe('RepresentanteEditComponent', () => {
  let component: RepresentanteEditComponent;
  let fixture: ComponentFixture<RepresentanteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentanteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
