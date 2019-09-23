import { TestBed } from '@angular/core/testing';

import { TestplantreeService } from './testplantree.service';

describe('TestplantreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestplantreeService = TestBed.get(TestplantreeService);
    expect(service).toBeTruthy();
  });
});
