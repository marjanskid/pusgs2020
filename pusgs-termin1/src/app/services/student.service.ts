import { Injectable } from '@angular/core';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  loadStudents() {
    console.log('Učitavanje studenata...');
    return this.mockedStudents();
  }


  mockedStudents(): Array<Student> {
    let allStudents = new Array<Student>();

    const s1 = new Student('PR56-2016', 'Mobi Dick', 86);
    const s2 = new Student('PR78-2016', 'Haris Džinović', 73);
    const s3 = new Student('PR100-2016', 'Dragana Mirković', 99);
    const s4 = new Student('PR122-2016', 'Mitar Mirić', 50);

    allStudents.push(s1);
    allStudents.push(s2);
    allStudents.push(s3);
    allStudents.push(s4);

    return allStudents;
  }

}
