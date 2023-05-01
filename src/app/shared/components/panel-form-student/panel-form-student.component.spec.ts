import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFormStudentComponent } from './panel-form-student.component';

describe('PanelFormStudentComponent', () => {
  let component: PanelFormStudentComponent;
  let fixture: ComponentFixture<PanelFormStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelFormStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelFormStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
