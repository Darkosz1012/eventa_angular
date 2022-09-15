import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '@app/services';
import { User } from '@app/_models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public currentUser: User | null;
  
  passwordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar) { 
    this.authenticationService.currentUser.subscribe((value) => {
      this.currentUser = value; // this.username will hold your value and modify it every time it changes 
  });
  }



  
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
 

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
        password: ['', Validators.required],
        repeat_password: ['', Validators.required],
    },{validator: this.checkIfMatchingPasswords('password', 'repeat_password')});
  }

  // convenience getter for easy access to form fields
  get f() { return this.passwordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.passwordForm.invalid) {
          return;
      }

      this.loading = true;
      if(this.currentUser){
        this.currentUser.password = this.f["password"].value;
        this.authenticationService.changePassword(( this.currentUser)).subscribe({
          next: data => {
            this.loading = false;
            this._snackBar.open("The update of the password was successful.",undefined,{
              duration: 3000,
              
            });
          },
          error: error => {
            this.loading = false;
            this._snackBar.open("There was an error!",undefined,{
              duration: 3000,
              
            });
              console.error('There was an error!', error);
          }
        });
      }
  }
}
