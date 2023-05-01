import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { NgxMaskPipe } from 'ngx-mask';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { PanelFormStudentComponent } from 'src/app/shared/components/panel-form-student/panel-form-student.component';
import { PanelFormStudentService } from 'src/app/shared/services/panel-form-student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from 'src/app/shared/utils/gender.pipe';


@NgModule({
  declarations: [
    StudentsComponent,
    TableComponent,
    PanelFormStudentComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgxMaskPipe,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PanelFormStudentService]
})
export class StudentsModule { }
