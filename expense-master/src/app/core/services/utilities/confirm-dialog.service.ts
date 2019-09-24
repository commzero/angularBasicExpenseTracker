import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

      let dialogRef: MatDialogRef<ConfirmComponent>;

      dialogRef = this.dialog.open(ConfirmComponent);

      dialogRef.componentInstance.title = title;
      
      dialogRef.componentInstance.message = message;

      return dialogRef.afterClosed();
  }
}
