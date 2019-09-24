import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExpenseResponseModel } from '../../models/expense-response-model';
import { ExpenseRequestModel } from '../../models/expense-request-model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllExpenses() {
    return this.http.get<ExpenseResponseModel>(environment.apiUrl + 'expenses');
  }

  addNewExpense(body: ExpenseRequestModel) {
    return this.http.post(environment.apiUrl + 'expenses', body);
  }

  editExpense(body: ExpenseRequestModel) {
    return this.http.put(environment.apiUrl + `expenses/${body.id}`, body);
  }

  deleteExpense(id: number) {
    return this.http.delete(environment.apiUrl + `expenses${id}`);
  }

  listCurrencies() {
    return this.http.get(environment.apiUrl + 'currencies');
  }

}
