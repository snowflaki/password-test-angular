import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent {
  password: string = '';
  strength: string = 'empty';

  passwordHandler = () => {
    if (this.password.length === 0) {
      this.strength = 'empty';
    } else if (!this.password || this.password.length < 8) {
      this.strength = 'small';
    } else if (
      /[a-zA-Z]/.test(this.password) &&
      /\d/.test(this.password) &&
      /\W/.test(this.password)
    ) {
      this.strength = 'strong';
    } else if (
      (/[a-zA-Z]/.test(this.password) && /\d/.test(this.password)) ||
      (/[a-zA-Z]/.test(this.password) && /\W/.test(this.password)) ||
      (/\d/.test(this.password) && /\W/.test(this.password))
    ) {
      this.strength = 'medium';
    } else {
      this.strength = 'easy';
    }
  };
}
