import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCargasComponent } from './contrato-cargas.component';

describe('ContratoCargasComponent', () => {
  let component: ContratoCargasComponent;
  let fixture: ComponentFixture<ContratoCargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoCargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
