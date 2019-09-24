import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../../services/http/categories.service';
import { Subscription } from 'rxjs';
import { CategoriesAddEditComponent } from './categories-add-edit/categories-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogService } from 'src/app/core/services/utilities/confirm-dialog.service';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.css']
})
export class CategoriesMainComponent implements OnInit, OnDestroy {

  categoriesSubscription: Subscription;

  displayedColumns: string[] = ['id', 'name', 'active', 'actions'];

  categories: any;

  constructor(
    private categoryService: CategoriesService,
    private toaster: MatSnackBar,
    private confirmService: ConfirmDialogService,
    private modal: MatDialog
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesSubscription = this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    }, err => { console.log(err); });
  }

  onAddCategory() {
    this.modal.open(CategoriesAddEditComponent).afterClosed().subscribe(modalClosed => {
      this.getCategories();
    }, err => console.log(err));
  }

  onEditCategory(category) {
    this.modal.open(CategoriesAddEditComponent, { data: category }).afterClosed().subscribe(modalClosed => {
      this.getCategories();
    }, err => console.log(err));
  }

  deleteCategory(id) {

    this.confirmService.confirm(`Delete Category ${id}`, 'Are you sure?').subscribe(onConfirmDeletion => {
      if (onConfirmDeletion) {
        this.categoryService.deleteCategory(id).subscribe(deleted => {
          this.toaster.open('Deleted Successfully!', null, { duration: 2000 });
          this.getCategories();
        }, err => console.log(err));
      } else {
        this.getCategories();
        this.toaster.open('Canceled!', null, { duration: 2000 });
      }
    });
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }

}
