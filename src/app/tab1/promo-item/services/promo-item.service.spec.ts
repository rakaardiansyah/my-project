import { TestBed } from '@angular/core/testing';

import { PromoItemService } from './promo-item.service';

describe('PromoItemService', () => {
  let service: PromoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
