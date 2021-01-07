import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStudentPageRoutingModule } from './new-student-routing.module';

import { NewStudentPage } from './new-student.page';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewStudentPageRoutingModule
  ],
  declarations: [NewStudentPage]
})
export class NewStudentPageModule {}
