import { NgModule } from '@angular/core';
import { ExpensesMainComponent } from './pages/expenses-main/expenses-main.component';
import { ExpensesAddEditComponent } from './pages/expenses-main/expenses-add-edit/expenses-add-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ExpensesMainComponent,
  ExpensesAddEditComponent
    ],

  imports: [
    SharedModule
  ],
  providers: [],
  entryComponents: [
  ExpensesAddEditComponent      
  ],
  exports: [
    ExpensesMainComponent
  ],
  bootstrap: []
})
export class ExpensesModule { }
