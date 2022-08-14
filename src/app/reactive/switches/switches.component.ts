import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/person.interface';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit{
  
  form: FormGroup = this._fb.group({
    gender: [ 'M', Validators.required ],
    notifications: [ true, Validators.required ], 
    terms: [ true, [ Validators.requiredTrue ] ]
  })

  person: User = {
    gender: 'M',
    notifications: true
  }
  get formValue() { 
    let formValue =  { ...this.form.value };
    delete formValue.terms    
    return formValue;
  }

  constructor( private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.form.reset({ 
      ...this.person,
      terms: false })

      this.form.valueChanges.subscribe( ( { terms, ...formRest } ) => {
        this.person = formRest;
       } )
  }


  save(){

    this.person = this.formValue;


  }
  
}  
