import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export interface UserProfile {
  connections: Connections;
  emailSettings: EmailSettings;
}
export interface Connections {
  facebook: boolean;
  twitter: boolean;
  google: boolean;
}
export interface EmailSettings {
  email: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

  result;
  userForm: FormGroup;

  userProfile$ = this.apiData()
    .pipe(
      tap(response => this.fillFormData(response)),
    );

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group(
      {
        connections: this.formBuilder.group({
          facebook: [null],
          twitter: [null],
          google: [null],
        }),
        emailSettings: this.formBuilder.group({
          email: [null],
        }),
      }
    );
  }

  onSave() {
    this.result = this.userForm.value;
  }

  private fillFormData(response: UserProfile) {
    Object.keys(response).forEach((item) => {
      const abstractControl = this.userForm.controls[item];

      if (abstractControl && !(abstractControl instanceof FormArray)) {
        if (abstractControl instanceof FormGroup) {
          if (response[item] instanceof Object) {
            Object.keys(response[item]).forEach((child) => {
              this.userForm.get(`${item}.${child}`).setValue(response[item][child]);
            });
          }
        } else {
          this.userForm.get(item).setValue(response[item]);
        }
      }
    });
  }

  // In real example this part of code will be placed
  // in http service
  private apiData(): Observable<UserProfile> {
    const userProfile = {
      connections: {
        facebook: true,
        twitter: false,
        google: false,
      },
      emailSettings: {
        email: 'patryk.b@me.com',
      },
    };

    return of(userProfile).pipe(delay(1000));
  }
}
