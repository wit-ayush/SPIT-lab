import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentFormComponent implements OnInit {
  student = { name: '', ucid: '', branch: '', marks: null };
  students: any[] = [];

  updateModal = false;
  updateStudentData: any = { _id: '', name: '', ucid: '', branch: '', marks: null };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStudents();
  }

  addStudent() {
    this.http
      .post('http://localhost:3000/api/students', this.student)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Student added successfully!');
          this.getStudents();
          this.student = { name: '', ucid: '', branch: '', marks: null };
        },
        (error) => {
          console.error(error);
          alert('An error occurred while adding the student.');
        }
      );
  }

  getStudents() {
    this.http.get<any[]>('http://localhost:3000/api/getstudents').subscribe(
      (response) => {
        console.log(response);
        this.students = response;
      },
      (error) => {
        console.error(error);
        alert('An error occurred while fetching students.');
      }
    );
  }

  updateStudent() {
    this.http.put(`http://localhost:3000/api/updatestudents/${this.updateStudentData._id}`, this.updateStudentData).subscribe(
      (response) => {
        alert('Student updated successfully!');
        this.getStudents(); // Refresh the student list after update
        this.closeModal();
      },
      (error) => {
        console.error(error);
        alert('An error occurred while updating the student.');
      }
    );
  }

  deleteStudent(id: string) {
    this.http.delete(`http://localhost:3000/api/deletestudents/${id}`).subscribe(
      (response) => {
        alert('Student deleted successfully!');
        this.getStudents();
      },
      (error) => {
        console.error(">>.",error);
        alert('An error occurred while deleting the student.');
      }
    );
  }

  openUpdateModal(student: any) {
    this.updateStudentData = { ...student }; // Copy the data to prevent direct modification
    this.updateModal = true;
  }

  closeModal() {
    this.updateModal = false;
  }

}
