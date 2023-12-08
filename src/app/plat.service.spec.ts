import { TestBed } from '@angular/core/testing';

import { platService } from './plat.service';

describe('platService', () => {
  let service: platService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(platService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
