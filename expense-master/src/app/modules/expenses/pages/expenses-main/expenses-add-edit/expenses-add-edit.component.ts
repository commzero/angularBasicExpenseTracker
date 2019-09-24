import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/core/services/utilities/confirm-dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpensesService } from '../../../services/http/expenses.service';
import { CategoriesService } from 'src/app/modules/categories/services/http/categories.service';

@Component({
  selector: 'app-expenses-add-edit',
  templateUrl: './expenses-add-edit.component.html',
  styleUrls: ['./expenses-add-edit.component.css']
})
export class ExpensesAddEditComponent implements OnInit {

  addEditExpenseForm: FormGroup;

  currencies: any = [];

  categories: any = [];

  constructor(
    public dialogRef: MatDialogRef<ExpensesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public expenseObject,
    private formBuilder: FormBuilder,
    private expenseService: ExpensesService,
    private categoryService: CategoriesService,
    private toaster: MatSnackBar,
    private confirmService: ConfirmDialogService
  ) { }
  ngOnInit() {
    console.log(this.expenseObject);
    this.listAllCategories();
    this.listAllCurrencies();
    this.initExpenseForm();
    this.patchFormValues();
  }

  listAllCurrencies() {
    this.expenseService.listCurrencies().subscribe(currenciesArray => {
      console.log(currenciesArray);
      this.currencies = currenciesArray;
    }, err => console.log(err));
  }

  listAllCategories() {
    this.categoryService.getAllCategories().subscribe(categoriesArray => {
      console.log(categoriesArray);
      this.categories = categoriesArray;
    }, err => console.log(err));
  }

  patchFormValues() {
    if (this.expenseObject) {
      this.addEditExpenseForm.patchValue(this.expenseObject);
    } else {
      return 0;
    }
  }

  initExpenseForm() {
    this.addEditExpenseForm = this.formBuilder.group({
      id: [0],
      amount: [null, [Validators.required, Validators.min(1)]],
      currency: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      desc: ['']
    });
  }

  onAddExpense() {
    this.confirmService.confirm('Add Expense', 'Are you Sure?').subscribe(onConfirmAdding => {
      if (onConfirmAdding) {
        this.expenseService.addNewExpense(this.addEditExpenseForm.value).subscribe(expenseAdded => {
          this.dialogRef.close();
          this.toaster.open('Created Successfully', null, { duration: 2000 });
        }), err => console.log(err);
      } else {
        this.toaster.open('Canceled!', null, { duration: 2000 });
      }
    });

  }

  onEditExpense() {
    this.confirmService.confirm(`Edit Expense ${this.addEditExpenseForm.value.id}`, 'Are you Sure?').subscribe(onConfirmEditing => {
      if (onConfirmEditing) {
        this.expenseService.editExpense(this.addEditExpenseForm.value).subscribe(expenseEdited => {
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
