/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotwheelsService } from './hotwheels.service';

describe('Service: Hotwheels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotwheelsService]
    });
  });

  it('should ...', inject([HotwheelsService], (service: HotwheelsService) => {
    expect(service).toBeTruthy();
  }));
});
