import { Component, Input } from '@angular/core';
import { PanelFormStudentService } from '../../services/panel-form-student.service';
import { ModalDialogService } from '../../services/modal-dialog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() data: any[] = [];
  @Input() columns: string[] = [];

  constructor(
    private panelFormStudentService: PanelFormStudentService,
    private modalDialogService: ModalDialogService
  ) { }

  openPanel(id: number = 0): void {
    this.panelFormStudentService.openPanel(id);
  }

  closePanel(): void {
    this.panelFormStudentService.closePanel();
  }

  deleteStudent(student: any): void {
    this.modalDialogService.openConfirmModal(student.nome, student.id);
  }

}
