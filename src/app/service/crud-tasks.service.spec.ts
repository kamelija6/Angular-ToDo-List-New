import { TestBed } from '@angular/core/testing';

import { CrudTasksService } from './crud-tasks.service';

describe('CrudTasksService', () => {
  let service: CrudTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
