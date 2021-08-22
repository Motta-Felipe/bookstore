import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: Book = {
    id: '',
    title: '',
    name_author: '',
    text: ''
  }

  id_cat: String = "";
  id: String = "";
  root: String = "";

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.root = `categories/${this.id_cat}/books`;
    this.service.findById(this.id).subscribe((response) => this.book = response);
  }

  delete(): void {
    this.service.delete(this.book.id!).subscribe((response) => {
      this.router.navigate([this.root]);
      this.service.message("Book deleted successfully");
    }, err => {
      this.router.navigate([this.root]);
      this.service.message('Error, try again later')
    });
  }

  cancel(): void {
    this.router.navigate([this.root])
  }
  
}
