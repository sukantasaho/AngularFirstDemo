import { Component } from '@angular/core';

@Component({
  selector: 'app-naresh-it-student-registration-form-validation',
  templateUrl: './naresh-it-student-registration-form-validation.component.html',
  styleUrls: ['./naresh-it-student-registration-form-validation.component.css']
})
export class NareshItStudentRegistrationFormValidationComponent {

  Register(data:any){
      console.log(JSON.stringify(data));
  }
}
