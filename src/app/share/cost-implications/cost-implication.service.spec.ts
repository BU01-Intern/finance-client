import { TestBed } from '@angular/core/testing';

import { CostImplicationService } from './cost-implication.service';

describe('CostImplicationService', () => {
  let service: CostImplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostImplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
