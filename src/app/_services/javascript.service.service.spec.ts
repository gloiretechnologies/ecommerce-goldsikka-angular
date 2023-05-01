import { TestBed } from '@angular/core/testing';

import { JavascriptServiceService } from './javascript.service.service';

describe('JavascriptServiceService', () => {
  let service: JavascriptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavascriptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
