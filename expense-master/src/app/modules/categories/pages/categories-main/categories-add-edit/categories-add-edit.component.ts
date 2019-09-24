import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/http/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogService } from 'src/app/core/services/utilities/confirm-dialog.service';

@Component({
  selector: 'app-categories-add-edit',
  templateUrl: './categories-add-edit.component.html',
  styleUrls: ['./categories-add-edit.component.css']
})
export class CategoriesAddEditComponent implements OnInit {

  addEditCategoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CategoriesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public categoryObject,
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService,
    private toaster: MatSnackBar,
    private confirmService: ConfirmDialogService
  ) { }

  ngOnInit() {
    console.log(this.categoryObject);
    this.initCategoryForm();
    this.patchFormValues();
  }

  patchFormValues() {
    if (this.categoryObject) {
      this.addEditCategoryForm.patchValue(this.categoryObject);
    } else {
      return 0;
    }
  }

  initCategoryForm() {
    this.addEditCategoryForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      active: false
    });
  }

  onAddCategory() {
    this.confirmService.confirm('Add Category', 'Are you Sure?').subscribe(onConfirmAdding => {
      if (onConfirmAdding) {
        this.categoryService.addNewCategory(this.addEditCategoryForm.value).subscribe(categoryAdded => {
          this.dialogRef.close();
          this.toaster.open('Created Successfully', null, { duration: 2000 });
        }), err => console.log(err);
      } else {
        this.toaster.open('Canceled!', null, { duration: 2000 });
      }
    });

  }

  onEditCategory() {
    this.confirmService.confirm(`Edit Category ${this.addEditCategoryForm.value.id}`, 'Are you Sure?').subscribe(onConfirmEditing => {
      if (onConfirmEditing) {
        this.categoryService.editCategory(this.addEditCategoryForm.value).subscribe(categoryEdited => {
          this.dialogRef.close();
          this.toaster.open('Edited Successfully', null, { duration: 2000 });
        }), err => console.log(err);
      } else {
        this.toaster.open('Canceled!', null, { duration: 2000 });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
