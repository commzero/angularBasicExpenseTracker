import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CategoriesModule,
    ExpensesModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
