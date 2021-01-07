import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public myForm:FormGroup;
  public student:Estudiante;

  constructor(private studentService: EstudianteService, private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name:[""],
      controlnumber:[""],
      curp:[""],
      age:[0],
      active:[false]
    })
  }

  create(){
    this.student = {
      name:this.myForm.controls.name.value,
      controlnumber:this.myForm.controls.controlnumber.value,
      curp:this.myForm.controls.curp.value,
      age:this.myForm.controls.age.value,
      active:this.myForm.controls.active.value
    }
    this.studentService.createStudent(this.student);
  }

}
