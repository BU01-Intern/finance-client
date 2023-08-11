import { TestBed } from '@angular/core/testing';

import { ContractdetailService } from './contractdetail.service';

describe('ContractdetailService', () => {
  let service: ContractdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
