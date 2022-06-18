import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  formGroup = new FormGroup({
    'name' : new FormControl('', [Validators.required]),
    'password' : new FormControl('', [Validators.required]),
    'euaAccepted' : new FormControl(false, [Validators.requiredTrue]),
  });
  formClass = 'form-container';
  showPassword = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('This is the form: ');
    console.log(this.formGroup.value);

    this.formClass = this.formGroup.valid ? 'form-container' : 'form-container invalid';
  }

  togglePasswordVisibility() {
    this.showPassword = ! this.showPassword;
  }
}
