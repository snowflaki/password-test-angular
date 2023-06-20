import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { PasswordStrengthService } from '../../services/calculate-password-strength.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent implements ControlValueAccessor {
  passwordForm: FormGroup;
  strength: string = 'empty';

  strengthSections: { name: string }[] = [
    { name: 'easy' },
    { name: 'medium' },
    { name: 'strong' },
  ];

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private formBuilder: FormBuilder,
    private passwordStrengthService: PasswordStrengthService
  ) {
    this.passwordForm = this.formBuilder.group({
      password: '',
    });

    this.passwordForm.valueChanges.subscribe(() => {
      this.calculatePasswordStrength();
      this.onChange(this.passwordForm.get('password')?.value);
    });
  }

  writeValue(value: string): void {
    this.passwordForm.get('password')?.setValue(value);
    this.calculatePasswordStrength();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private calculatePasswordStrength() {
    const password = this.passwordForm.get('password')?.value;
    this.strength = this.passwordStrengthService.getPasswordStrength(password);
  }
}
