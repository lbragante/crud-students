import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanelFormStudentService } from '../../services/panel-form-student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../model/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel-form-student',
  templateUrl: './panel-form-student.component.html',
  styleUrls: ['./panel-form-student.component.scss']
})
export class PanelFormStudentComponent {

  formStudent!: FormGroup;
  isOpen: boolean = false;
  id?: number;
  subscription!: Subscription;
  title: string = '';
  isEdit: boolean = false;
  @Output() updateStudentsList = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private panelFormStudentService: PanelFormStudentService,
    private studentService: StudentService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPanelState();
    this.createForm();
  }

  createForm(): void {
    this.formStudent = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(1)]],
      sexo: ['', Validators.required]
    });
  }

  getPanelState(): void {
    this.subscription = this.panelFormStudentService.getPanelState().subscribe(state => {
      this.isOpen = state.isOpen;
      this.id = state.id;
      this.setPanelContext();
    });
  }

  /* setPanelContext: define como o painel vai se comportar */

  setPanelContext(): void {
    if (this.id) {
      this.title = 'Editar aluno';
      this.isEdit = true;
      this.getStudentById(this.id);
    } else {
      this.title = 'Adicionar aluno';
      this.isEdit = false;
    }
  }

  close(): void {
    this.panelFormStudentService.closePanel();
    this.resetForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createStudent(): void {
    const student = this.formStudent.value as Student;
    this.studentService.createStudent(student).subscribe({
      next: () => {
        this.toastr.success('Aluno salvo com sucesso!', 'Deu certo!');
        this.updateStudentsList.emit(true);
        this.resetForm();
      },
      error: (error) => {
        this.toastr.error('Erro ao salvar o aluno.', 'Erro');
        console.error(error);
      }
    });
  }

  /* getStudentById: fiz desta forma para mostrar como trabalho com todos os cenários de chamadas.
    Em um projeto real não faria sentido essa requisição a cada edição de alunos. */

  getStudentById(studentId: number): void {
    this.studentService.getStudentById(studentId).subscribe({
      next: (student) => {
        this.formStudent.patchValue(student);
      },
      error: (error) => {
        this.toastr.error('Erro ao buscar o aluno selecionado.', 'Erro');
        console.error(error);
      }
    });
  }

  editStudent(): void {
    const student = { ...this.formStudent.value, id: this.id } as Student;
    this.studentService.editStudent(student).subscribe({
      next: () => {
        this.toastr.success('Aluno atualizado com sucesso!', 'Deu certo!');
        this.updateStudentsList.emit(true);
      },
      error: (error) => {
        this.toastr.error('Erro ao salvar a edição do aluno selecionado.', 'Erro');
        console.error(error);
      }
    });
  }

  resetForm(): void {
    this.formStudent.reset();
  }

}
