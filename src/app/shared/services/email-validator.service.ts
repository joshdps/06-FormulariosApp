import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private _http: HttpClient ) { }

  validate( control: AbstractControl ): Observable<ValidationErrors | null> {
 
    const email = control.value;

    const url = `http://localhost:3000/usuarios/?q=`
    
    return this._http.get<any[]>(`${url}${ email }`).pipe(
      delay(3000),
      map( res => {
        return (res.length === 0)? null: { emailTaken: true }
      })
    )
  }

}
