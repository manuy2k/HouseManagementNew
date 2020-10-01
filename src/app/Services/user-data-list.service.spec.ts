import { TestBed } from '@angular/core/testing';

import { UserDataListService } from './user-data-list.service';

describe('UserDataListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataListService = TestBed.get(UserDataListService);
    expect(service).toBeTruthy();
  });
});
