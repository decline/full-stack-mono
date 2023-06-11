import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConcertService } from './concert.service';

describe('ConcertService', () => {
  let service: ConcertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ConcertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
