import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-hour',
  templateUrl: './input-hour.component.html',
  styleUrls: ['./input-hour.component.scss'],
})
export class InputHourComponent {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
