import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentFormComponent {
  student = {
    firstName: '',
    lastName: '',
    age: null,
    grade: ''
  };

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit() {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
