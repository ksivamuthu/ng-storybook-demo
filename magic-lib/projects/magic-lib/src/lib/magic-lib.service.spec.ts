import { TestBed } from '@angular/core/testing';

import { MagicLibService } from './magic-lib.service';

describe('MagicLibService', () => {
  let service: MagicLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
