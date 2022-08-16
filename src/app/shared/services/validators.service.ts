import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {




  public namePattern: string = '([a-zA-Z]+ [a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



  constructor() { }


  cantBeX(control: FormControl): ValidationErrors | null {

    let value: string = control.value?.trim().toLowerCase();
    if (value === 'shiotome') return { noShiotome: true }

    return null
  }

  passwordsMatch( password1: string, password2: string ){
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const pass1 = formGroup.get(password1)?.value;
      const pass2 = formGroup.get(password2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get( password2 )?.setErrors({ noMatch : true }) 
        return { noMatch : true }
      }

      formGroup.get( password2 )?.setErrors( null ) 

      return null
    }
  }

  invalidField( form: FormGroup, field: string){
    return form.controls[ field ].invalid && form.controls[ field ].touched
  }

  fieldHasErrors(  form: FormGroup, field: string ){
    return form.controls[ field ]?.errors && form.controls[ field ].touched
  }

}
