import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string {
    if (!password || password.length === 0) {
      return 'empty';
    } else if (password.length < 8) {
      return 'small';
    } else if (
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /\W/.test(password)
    ) {
      return 'strong';
    } else if (
      (/[a-zA-Z]/.test(password) && /\d/.test(password)) ||
      (/[a-zA-Z]/.test(password) && /\W/.test(password)) ||
      (/\d/.test(password) && /\W/.test(password))
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
