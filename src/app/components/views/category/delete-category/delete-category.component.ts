import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe((response) => {
      this.category = response;
    })
  }

  delete(): void {
    this.service.delete(this.category.id!).subscribe(response => {
      this.router.navigate(['categories'])
      this.service.message("Category deleted successfully")
    }, err => {
      this.service.message(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['categories'])
  }
}
