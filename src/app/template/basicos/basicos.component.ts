import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild('productForm') productForm!: NgForm;
  
  initForm: Form = {
    product: '',
    price: 0,
    stock: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  save (){    
    console.log(this.productForm.controls);

    this.productForm.resetForm({
      price : 0,
      stock : 0}

    );

    
  }

  productValid(): boolean {
    return (this.productForm?.controls['product']?.invalid && this.productForm?.controls['product']?.touched)?  true : false;
  }

  priceValid(): boolean {
    if  (this.productForm?.controls['price']?.valid && this.productForm?.controls['price']?.touched && this.productForm?.controls['price']?.value < 0){
      return true
    }else{
      //this.productForm.value.price = 0;
      return false
    }
  }



}
