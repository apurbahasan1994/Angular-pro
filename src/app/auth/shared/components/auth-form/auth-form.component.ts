import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<FormGroup>();
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.createAuthForm();
  }
  createAuthForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passInvalid() {
    const control = this.form.get('password');
    return control?.hasError('required') && control.touched;
  }
  get emailFormat() {
    const control = this.form.get('email');
    return control?.hasError('email') && control.touched;
  }
  get emailInvalid() {
    const control = this.form.get('email');
    return control?.hasError('required') && control.touched;
  }
}
