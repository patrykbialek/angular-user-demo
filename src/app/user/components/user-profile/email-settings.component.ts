import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSettingsComponent {
  @Input() userForm: FormGroup;
}
