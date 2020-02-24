import { TestBed } from '@angular/core/testing';

import { ItemsdataService } from './itemsdata.service';

describe('ItemsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsdataService = TestBed.get(ItemsdataService);
    expect(service).toBeTruthy();
  });
});
