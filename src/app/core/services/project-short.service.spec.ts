import { TestBed } from '@angular/core/testing';

import { ProjectShortService } from './project-short.service';

describe('ProjectShortService', () => {
  let service: ProjectShortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectShortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
