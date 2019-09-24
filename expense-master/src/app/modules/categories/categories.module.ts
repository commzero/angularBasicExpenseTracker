import { NgModule } from '@angular/core';
import { CategoriesMainComponent } from './pages/categories-main/categories-main.component';
import { CategoriesAddEditComponent } from './pages/categories-main/categories-add-edit/categories-add-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  CategoriesMainComponent,
  CategoriesAddEditComponent
    ],
  imports: [
    SharedModule
  ],
  providers: [],
  entryComponents: [
    CategoriesAddEditComponent
  ],
  exports: [
    CategoriesMainComponent
  ],
  bootstrap: []
})
export class CategoriesModule { }
