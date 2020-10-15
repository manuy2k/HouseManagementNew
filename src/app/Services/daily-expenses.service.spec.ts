import { TestBed } from '@angular/core/testing';

import { DailyExpensesService } from './daily-expenses.service';

describe('DailyExpensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyExpensesService = TestBed.get(DailyExpensesService);
    expect(service).toBeTruthy();
  });
});
