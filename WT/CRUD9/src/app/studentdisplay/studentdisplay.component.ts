import { Component } from '@angular/core';

@Component({
  selector: 'app-studentdisplay',
  templateUrl: './studentdisplay.component.html',
  styleUrls: ['./studentdisplay.component.css']
})
export class StudentdisplayComponent {
  students = [{
    firstName: '',
    lastName: '',
    age: null,
    grade: ''
  }];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students = data;
    });
  }
}
  
