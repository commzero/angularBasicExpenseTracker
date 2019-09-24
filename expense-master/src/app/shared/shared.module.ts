import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';

// Material Modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    NotFoundComponent,
    ConfirmComponent
  ],
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatChipsModule,
    MatNativeDateModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    NotFoundComponent,
    MatTabsModule,
    MatChipsModule,
    MatNativeDateModule,
    CommonModule,
    ReactiveFormsModule,
    ConfirmComponent
  ],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: []
})
export class SharedModule { }