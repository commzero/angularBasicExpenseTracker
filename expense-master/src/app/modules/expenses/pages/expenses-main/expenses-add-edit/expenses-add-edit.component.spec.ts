import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAddEditComponent } from './expenses-add-edit.component';

describe('ExpensesAddEditComponent', () => {
  let component: ExpensesAddEditComponent;
  let fixture: ComponentFixture<ExpensesAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
