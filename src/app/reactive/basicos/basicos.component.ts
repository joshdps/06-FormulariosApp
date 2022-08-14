import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

/*   form: FormGroup = new FormGroup({
    name : new FormControl('RTX 4080ti'),
    price: new FormControl(1500),
    stock: new FormControl(50)
  })
 */

  form: FormGroup = this._fb.group({
    name : [ , [ Validators.required, Validators.minLength(3) ] ],
    price: [ , [ Validators.required, Validators.min(0) ]  ],
    stock: [ , [ Validators.required, Validators.min(0) ]  ] 
  })

  constructor( private _fb: FormBuilder, 
               private _utilService: UtilService) { }

  ngOnInit(): void {

    // el setValue da error si no se le pasan todos los controles del form
    this.form.reset({
      name : 'RTX40820ti',
      price: 1500,
      stock: 150
    })
  }

  invalidField( field: string){
    return this._utilService.invalidField(this.form, field)
  }


  save(){
    
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    console.log(this.form.value);

    this.form.reset();
    

  }
 
}
