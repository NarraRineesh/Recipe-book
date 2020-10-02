import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { CrudService } from 'src/app/shared/curd.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  
})

export class AddItemComponent implements OnInit {
   public itemForm: FormGroup;
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
  ) { }

 
  ngOnInit() {
    this.crudApi.GetItemsList();  // Call GetItemsList() before main form is being called
    this.recipeForm();              // Call student form when component is ready
  }

  // Reactive recipe form
  recipeForm(){
    this.itemForm = this.fb.group({
      name: ['', [Validators.required,]],
      description: ['', [Validators.required,]],
      imagepath: ['', [Validators.required,]],
      time: ['', [Validators.required,]]

    })  
  }

  // Accessing form control using getters
  get Name() {
    return this.itemForm.get('name');
  }

  get Description() {
    return this.itemForm.get('description');
  }  

  get ImagePath() {
    return this.itemForm.get('imagepath');
  }

  get Time() {
    return this.itemForm.get('time');
  }

  // Reset student form's values
  ResetForm() {
    this.itemForm.reset();
  }  
 
  submitrecipeData() {
    this.crudApi.Additem(this.itemForm.value); // Submit student data using CRUD API
    console.log(this.itemForm.value);
    this.ResetForm();  // Reset form when clicked on reset button
   };

}