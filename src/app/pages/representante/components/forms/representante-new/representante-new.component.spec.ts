import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteNewComponent } from './representante-new.component';

describe('RepresentanteNewComponent', () => {
  let component: RepresentanteNewComponent;
  let fixture: ComponentFixture<RepresentanteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentanteNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
