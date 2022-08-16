import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { map, pipe } from 'rxjs';
import { EmailValidatorService } from 'src/app/shared/services/email-validator.service';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  
  emailMessage: string = '';

  form: FormGroup = this._fb.group({
    name            : [ '', [ Validators.required, Validators.pattern( this._validators.namePattern ) ] ] ,
    email           : [ '', [ Validators.required, Validators.pattern( this._validators.emailPattern ) ], [ this._evService ] ],
    username        : [ '', [ Validators.required, this._validators.cantBeX ] ],
    password        : [ '', [ Validators.required, Validators.minLength(6) ] ],
    confirmPassword : [ '', [ Validators.required ] ],
  },{
    validators: [ this._validators.passwordsMatch( 'password','confirmPassword') ]
  }) 


  constructor( private _fb        : FormBuilder,
               private _validators: ValidatorsService,
               private _evService : EmailValidatorService ) { }

  ngOnInit(): void {
    this.form.reset({
      name            : ' Josh Sanz',
      email           : 'josh@jp.com',
      username        : '',
      password        : '',
      confirmPassword : ''
    })
  }
  
  invalidField( field: string ){
    return this._validators.invalidField( this.form, field )
  }

  get emailErrorMsg(): string{
        
    if ( this.form.controls['email']?.errors ){      
      const errors = this.form.controls['email']?.errors;

      if  ( errors?.['required'] ) return 'Email es requerido'
      if  ( errors?.['emailTaken'] ) return 'Email ya esta registrado'
      if  ( errors?.['pattern'] ) return 'Debe ser un email válido'            
    }
    return ''
  }



  submitForm(){
    console.log(this.form.value);

    this.form.markAllAsTouched();
    
  }

  

}
