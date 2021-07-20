import { TestBed } from '@angular/core/testing';

import { CmatriculaService } from './cmatricula.service';

describe('CmatriculaService', () => {
  let service: CmatriculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmatriculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
