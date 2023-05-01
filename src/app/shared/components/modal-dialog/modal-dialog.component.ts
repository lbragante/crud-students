import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {

  name: string = '';
  id: number = 0;

  constructor(
    public bsModalRef: BsModalRef,
    private studentService: StudentService,
    private toastr: ToastrService
  ) { }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.toastr.success('Aluno deletado com sucesso!', 'Deu certo!');
        this.studentService.studentDeletedSource.next(id);
        this.closeModal();
      },
      error: (error) => {
        this.toastr.error('Erro ao deletar o aluno selecionado.', 'Erro');
        console.error(error);
      }
    });
  }

  closeModal(): void {
    this.bsModalRef.hide();
  }

}
