import { TestBed } from '@angular/core/testing';

import { ProductosInitService } from './productos-init.service';

describe('ProductosInitService', () => {
  let service: ProductosInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
