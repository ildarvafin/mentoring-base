import {Component, EventEmitter, inject, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogRef } from '@angular/material/dialog';
import { phoneValidator } from '../../../validating/phone.validator';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})


export class CreateUserFormComponent {

  readonly dialogRef = inject(MatDialogRef<CreateUserFormComponent>);

  @Output()
  public createUser = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, phoneValidator()]),
    website: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }),
  });

  public submitForm() {
    this.dialogRef.close(this.form.value);
  }
}
