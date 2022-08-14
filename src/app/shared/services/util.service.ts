import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  invalidField( form: FormGroup, field: string){
    return form.controls[ field ].invalid && form.controls[ field ].touched
  }

}
