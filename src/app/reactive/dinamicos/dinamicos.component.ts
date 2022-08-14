import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {
  
  form: FormGroup = this._fb.group({
    name : [ '' , [ Validators.required, Validators.minLength(3) ] ],
    favs : this._fb.array([
      ['Super mario bros', Validators.required],
      ['Zelda', Validators.required],
      ['Mortal Kombat', Validators.required],
      ['FIfa', Validators.required]
    ], Validators.required)  
  })

  newFav: FormControl = this._fb.control('', Validators.required)

  constructor( private _fb: FormBuilder,
               private _utilService: UtilService ) { }
  
  
  ngOnInit(): void {

    // el setValue da error si no se le pasan todos los controles del form
/*     this.form.reset({
      name : ''
  }) */
}

invalidField( field: string){
  return this._utilService.invalidField(this.form, field)
}


  get favsArray(){
    return this.form.get('favs') as FormArray;
  }

  save(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    console.log(this.form.value);

    this.form.reset();
    this.favsArray.clear()
    
  }

  addFav(){
    if ( this.newFav.invalid ) return;

   /*     // Otra forma de agregar nuevo control
    (this.form.get('favs') as FormArray).push()
   */
      this.favsArray.push( this._fb.control( this.newFav.value, Validators.required ) );

      this.newFav.reset();
  }

  removeFav( i: number ){
  /* this.favsArray.controls.splice( i,1 ) */ 
  this.favsArray.removeAt(i)
  }

}
