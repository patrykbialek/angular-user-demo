import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {

  @Input() userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // console.log(this.userForm)
  }

}
