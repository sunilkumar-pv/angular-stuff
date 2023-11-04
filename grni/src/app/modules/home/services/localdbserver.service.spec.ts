import { TestBed } from '@angular/core/testing';

import { LocaldbserverService } from './localdbserver.service';

describe('LocaldbserverService', () => {
  let service: LocaldbserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaldbserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
