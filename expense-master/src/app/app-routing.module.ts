import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ExpensesMainComponent } from './modules/expenses/pages/expenses-main/expenses-main.component';
import { CategoriesMainComponent } from './modules/categories/pages/categories-main/categories-main.component';



const routes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: 'expenses', component: ExpensesMainComponent },
  { path: 'categories', component: CategoriesMainComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
