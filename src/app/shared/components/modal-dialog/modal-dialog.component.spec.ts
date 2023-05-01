import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateStudentsComponent } from './modal-dialog.component';

describe('ModalCreateStudentsComponent', () => {
  let component: ModalCreateStudentsComponent;
  let fixture: ComponentFixture<ModalCreateStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
