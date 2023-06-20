import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-section',
  templateUrl: './password-strength-section.component.html',
})
export class PasswordStrengthSectionComponent {
  @Input() name: string = '';
  @Input() strength: string = '';
}
