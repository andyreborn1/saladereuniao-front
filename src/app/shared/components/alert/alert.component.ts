import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from 'src/app/model/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alert = {
    title: 'Reunião cadastrada',
    description: 'Sua reunião foi cadastrada com sucesso',
    btnOk: 'Ok',
    btnCancel: 'Cancelar',
    colorBtnOk: 'accent',
    colorBtnCancel: 'warm',
    hasBtnClose: false,
  };

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnOk = this.data.btnOk || this.alert.btnOk;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.colorBtnOk = this.data.colorBtnOk || this.alert.colorBtnOk;
      this.alert.colorBtnCancel =
        this.data.colorBtnCancel || this.alert.colorBtnCancel;
      this.alert.hasBtnClose = this.data.hasBtnClose || this.alert.hasBtnClose;
    }
  }
}
