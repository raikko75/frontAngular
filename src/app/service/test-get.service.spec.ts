import { TestBed } from '@angular/core/testing';

import { TestGetService } from './test-get.service';

describe('TestGetService', () => {
  let service: TestGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
