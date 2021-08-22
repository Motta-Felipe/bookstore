

//####################### ANGULAR  #########################
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


//####################### ANGULAR MATERIAL #########################
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from '@angular/material/snack-bar';

//####################### COMPONENTS #########################
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./components/views/home/home.component";
import { ReadCategoryComponent } from "./components/views/category/read-category/read-category.component";
import { CreateCategoryComponent } from "./components/views/category/create-category/create-category.component";
import { DeleteCategoryComponent } from './components/views/category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './components/views/category/update-category/update-category.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { CreateBookComponent } from './components/views/book/create-book/create-book.component';
import { UpdateBookComponent } from './components/views/book/update-book/update-book.component';
import { DeleteBookComponent } from './components/views/book/delete-book/delete-book.component';
import { ReadBookComponent } from './components/views/book/read-book/read-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ReadCategoryComponent,
    CreateCategoryComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent,
    BookReadAllComponent,
    CreateBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ReadBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
