import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  public title: string;
  
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>) {

  }
}
