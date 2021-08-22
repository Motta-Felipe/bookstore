import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {
    title: '',
    name_author: '',
    text: ''
  }

  id_cat: String = "";
  title = new FormControl('', [Validators.minLength(3)])
  name_author = new FormControl('', [Validators.minLength(3)])
  text = new FormControl('', [Validators.minLength(10)])

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
  }

  create(): void {
    this.service.create(this.book, this.id_cat).subscribe((response) => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      this.service.message("The book was created successfully");
    }, err => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.message(err.error.errors[i].message)
      }
    })
  }

  //#########VALIDATION MESSAGES#######
  getMessage(field: string) {
    let anyInvalid = this.title.invalid || this.text.invalid || this.name_author.invalid;

    if (this.title.invalid && field == "title") {
      return "The title field must have between 3 and 100 characters";
    }

    if (this.name_author.invalid && field == "name_author") {
      return "The authors'name must have between 3 and 100 characters";
    }

    if (this.text.invalid && field == "text") {
      return "The text field must have between 10 and 2.000.000 characters";
    }

    if (anyInvalid && field == "button") {
      return true;
    }
    return false
  }

  cancel(): void {
    this.router.navigate([`categories/${this.id_cat}/books`])
  }

}
