import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { students } from '../../data/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = students;
  failedStudents:Student[];
  showAll:boolean=true;
  showFailedStudents:boolean=false;
  showDetails:boolean=false;
  detailsBtnName:string = "Show Students Details";
  constructor() { }

  ngOnInit() {
    this.calculateGrade();
  }


  showFailed(){
    this.showAll = false;
    this.showFailedStudents = true;
    this.failedStudents = this.students.filter(student=>student.totalScore <60
    );
    console.log(this.failedStudents)
  }

  showAllStudents(){
    this.showAll = true;
    this.showFailedStudents =false;
  }
  calculateGrade(): void {

    students.forEach((student) => {
      student.totalScore = student.assigmentScore + student.midtermScore + student.finalScore + student.projectScore
      if (student.totalScore >= 90 && student.totalScore < 100) {
        student.totalGrade = 'A';
      }
      else if (student.totalScore >= 80 && student.totalScore < 90) {
        student.totalGrade = 'B';
      }
      else if (student.totalScore >= 70 && student.totalScore < 80) {
        student.totalGrade = 'C';
      }
      else if (student.totalScore >= 60 && student.totalScore < 70) {
        student.totalGrade = 'D';
      }
      else {
        student.totalGrade = 'F';
      }
    });

  }

  showStudentDetails(){
    this.showDetails =!this.showDetails;
    if(this.detailsBtnName=="Hide Students Details"){
      this.detailsBtnName = "Show Students Details"
    }
    else{
      this.detailsBtnName = "Hide Students Details"
    }
  }
}
