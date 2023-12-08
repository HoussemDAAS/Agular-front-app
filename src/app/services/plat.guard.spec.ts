import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { PlatGuard } from './plat.guard';

describe('PlatGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => PlatGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
