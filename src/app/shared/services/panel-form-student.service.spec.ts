import { TestBed } from '@angular/core/testing';

import { PanelFormStudentService } from './panel-form-student.service';

describe('PanelFormStudentService', () => {
  let service: PanelFormStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelFormStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
