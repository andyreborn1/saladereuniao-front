import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
