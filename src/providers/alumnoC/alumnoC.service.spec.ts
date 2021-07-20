import { TestBed } from '@angular/core/testing';

import { AlumnoCService } from './alumnoC.service';

describe('AlumnoCService', () => {
  let service: AlumnoCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
