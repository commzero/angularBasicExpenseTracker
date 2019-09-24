import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpensesService } from '../../services/http/expenses.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ExpensesAddEditComponent } from './expenses-add-edit/expenses-add-edit.component';

@Component({
  selector: 'app-expenses-main',
  templateUrl: './expenses-main.component.html',
  styleUrls: ['./expenses-main.component.css']
})
export class ExpensesMainComponent implements OnInit, OnDestroy {

  expensesSubscription: Subscription;

  displayedColumns: string[] = ['id', 'desc', 'amount', 'category', 'date', 'actions'];

  expenses: any;

  constructor(
    private expenseService: ExpensesService,
    private toaster: MatSnackBar,
    private modal: MatDialog
  ) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expensesSubscription = this.expenseService.getAllExpenses().subscribe(expenses => {
      this.expenses = expenses;
      console.log(expenses);
    }, err => { console.log(err); });
  }

  onAddExpense() {
    this.modal.open(ExpensesAddEditComponent, { width: '40%' }).afterClosed().subscribe(modalClosed => {
      this.getExpenses();
    }, err => console.log(err));
  }

  onEditExpense(expense) {
    this.modal.open(ExpensesAddEditComponent, { data: expense, width: '40%' }).afterClosed().subscribe(modalClosed => {
      this.getExpenses();
    }, err => console.log(err));
  }

  deleteExpense(id) {

    let confirmDeletion = confirm(`Delete Expense ${id}?`);

    if (confirmDeletion) {
      this.expenseService.deleteExpense(id).subscribe(deleted => {
        this.toaster.open('Deleted Successfully!', null, { duration: 2000 });
        this.getExpenses();
      }, err => console.log(err));
    } else {
      this.getExpenses();
      this.toaster.open('Canceled!', null, { duration: 2000 });
    }
  }

  ngOnDestroy() {
    this.expensesSubscription.unsubscribe();
  }

}
