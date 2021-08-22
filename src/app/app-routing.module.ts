import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { CreateBookComponent } from './components/views/book/create-book/create-book.component';
import { DeleteBookComponent } from './components/views/book/delete-book/delete-book.component';
import { ReadBookComponent } from './components/views/book/read-book/read-book.component';
import { UpdateBookComponent } from './components/views/book/update-book/update-book.component';
import { CreateCategoryComponent } from './components/views/category/create-category/create-category.component';
import { DeleteCategoryComponent } from './components/views/category/delete-category/delete-category.component';
import { ReadCategoryComponent } from './components/views/category/read-category/read-category.component';
import { UpdateCategoryComponent } from './components/views/category/update-category/update-category.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: ReadCategoryComponent
  },
  {
    path: 'categories/create',
    component: CreateCategoryComponent
  },
  {
    path: 'categories/delete/:id',
    component: DeleteCategoryComponent
  },
  {
    path: 'categories/update/:id',
    component: UpdateCategoryComponent
  },
  {
    path: 'categories/:id_cat/books',
    component: BookReadAllComponent
  },
  {
    path: 'categories/:id_cat/books/create',
    component: CreateBookComponent
  },
  {
    path: 'categories/:id_cat/books/:id/update',
    component: UpdateBookComponent
  },
  {
    path: 'categories/:id_cat/books/:id/delete',
    component: DeleteBookComponent
  },
  {
    path: 'categories/:id_cat/books/:id/read',
    component: ReadBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }