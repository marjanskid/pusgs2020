import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  allStudents: Array<Student>;
  studentToEdit: Student;

  constructor(private studentService: StudentService) {
    alert("Upravo se pozvao konstruktor komponente Student");
    this.allStudents = new Array<Student>();
    this.studentToEdit = new Student("", "");
  }

  ngOnInit(): void {
    alert("Upravo se pozvala OnInit metoda komponente Student");
  }

  loadStudents(): void {
    this.allStudents = this.studentService.loadStudents();
     // .subscribe(students => this.allStudents = students);
  }

  editStudentModal(student: Student): void {
    this.studentToEdit = student;
  }

  editStudentInfo(): void {
    let points = (<HTMLInputElement> document.getElementById("points")).value;
    this.updateStudent(points);
  }

  updateStudent(points: string): void {
    let index = this.allStudents.indexOf(this.studentToEdit);
    this.allStudents[index].points = +points;
    this.allStudents[index].setMark(+points);
    alert('Vaša izmena je sačuvana!');
  }


}
