import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordStrengthService } from './services/calculate-password-strength.service';
import { PasswordStrengthSectionComponent } from './components/password-strength-section/password-strength-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PasswordStrengthSectionComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
