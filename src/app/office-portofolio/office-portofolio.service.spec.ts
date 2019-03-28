import { TestBed, inject } from '@angular/core/testing';

import { OfficePortofolioService } from './office-portofolio.service';

describe('OfficePortofolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficePortofolioService]
    });
  });

  it('should be created', inject([OfficePortofolioService], (service: OfficePortofolioService) => {
    expect(service).toBeTruthy();
  }));
});
