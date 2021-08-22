import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  book: Book = {
    id: '',
    title: '',
    name_author: '',
    text: ''
  }

  id_cat: String = "";

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.service.findById(this.book.id!).subscribe((response) => { this.book = response; });
  }

  cancel(): void {
    this.router.navigate([`categories/${this.id_cat}/books`])
  }

}
