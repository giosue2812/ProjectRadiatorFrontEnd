import { TestBed } from '@angular/core/testing';

import { TypeFollowService } from './type-follow.service';

describe('TypeFollowService', () => {
  let service: TypeFollowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeFollowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
