import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favs, Person } from '../../shared/interfaces/person.interface';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  
  @ViewChild('persontForm') personForm!: NgForm;
  
  person: Person = {
    name: '',
    favs: [
      { id : 1, name : 'Josh'},
      { id : 2, name : 'Mia'},
      { id : 3, name : 'Fabio'},
      { id : 4, name : 'Dad'},
      { id : 5, name : 'Mom'}
    ]
  }

  newFav: string = '';

  
  save(){
    console.log("Posteado");
    
  }

  nameValid(){
    return (this.personForm?.controls['name']?.errors && this.personForm?.controls['name']?.touched)?  true : false;

  }

  addFav( fav: string ){

    if (fav === '') return 
    
    let newFav: Favs = {
      id : this.person.favs.length + 1,
      name : fav
    }

    this.person.favs.push( { ...newFav } )

    this.newFav = ''

  }

  removeFav( index : number ) {
    this.person.favs.splice( index, 1 )
  }

}
