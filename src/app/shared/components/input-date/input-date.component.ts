import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
