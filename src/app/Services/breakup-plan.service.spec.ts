import { TestBed } from '@angular/core/testing';

import { BreakupPlanService } from './breakup-plan.service';

describe('BreakupPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreakupPlanService = TestBed.get(BreakupPlanService);
    expect(service).toBeTruthy();
  });
});
