import { TestBed, inject } from '@angular/core/testing';

import { HserviceService } from './hservice.service';

describe('HserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HserviceService]
    });
  });

  it('should be created', inject([HserviceService], (service: HserviceService) => {
    expect(service).toBeTruthy();
  }));
});
