import { TestBed } from '@angular/core/testing';

import { NewsapiservicingService } from './newsapiservicing.service';

describe('NewsapiservicingService', () => {
  let service: NewsapiservicingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiservicingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
