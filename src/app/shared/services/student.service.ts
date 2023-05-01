import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly apiUrl = 'https://api-laser-teste.herokuapp.com/alunos';

  studentDeletedSource = new Subject<number>();
  studentDeleted$ = this.studentDeletedSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl);
  }

  getStudentById(studentId: number): Observable<Student> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.httpClient.get<Student>(url);
  }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiUrl, student);
  }

  editStudent(student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.httpClient.put<Student>(url, student);
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<Student>(url);
  }
}
