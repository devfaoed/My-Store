import { TestBed } from '@angular/core/testing';

import { productervice } from './product.service';

describe('productervice', () => {
  let service: productervice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productervice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
