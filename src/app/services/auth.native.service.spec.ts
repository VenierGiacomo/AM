import { TestBed } from '@angular/core/testing';

import { Auth.NativeService } from './auth.native.service';

describe('Auth.NativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.NativeService = TestBed.get(Auth.NativeService);
    expect(service).toBeTruthy();
  });
});
