import { Component } from '@angular/core';
import { PanelFormStudentService } from 'src/app/shared/services/panel-form-student.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { Student } from 'src/app/shared/model/student.model';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  formSearchStudent!: FormGroup;
  columns: string[] = ['Alunos', 'Sexo']
  data: Student[] = [];
  initialData: Student[] = [];
  noSearchResults: boolean = false;

  constructor(
    private panelFormStudentService: PanelFormStudentService,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getStudents();
    this.createFormSearch();
    this.updateStudentsListAfterDelete();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (students) => {
        this.data = students;
        this.initialData = this.data;
      },
      error: (error) => {
        this.toastr.error('Erro ao listar usuários cadastrados.', 'Erro');
        this.columns = [];
        console.error(error);
      }
    });
  }

  createFormSearch(): void {
    this.formSearchStudent = this.formBuilder.group({
      searchName: ['']
    });
  }

  filterData(): void {
    const searchName = this.formSearchStudent.get('searchName')?.value;

    if (!searchName) {
      this.data = this.initialData;
      this.noSearchResults = false;
      return;
    }

    const filteredStudents = this.initialData.filter((student) => {
      return student?.nome?.toLowerCase().includes(searchName.toLowerCase());
    });

    this.data = filteredStudents;
    this.noSearchResults = filteredStudents.length === 0;
  }

  updateStudentsList(event: boolean): void {
    if (event) this.getStudents();
  }

  updateStudentsListAfterDelete(): void {
    this.studentService.studentDeleted$.subscribe(id => {
      this.data = this.data.filter(student => student.id !== id);
    });
  }

  openPanel(id: number = 0): void {
    this.panelFormStudentService.openPanel(id);
  }

  closePanel(): void {
    this.panelFormStudentService.closePanel();
  }

}
