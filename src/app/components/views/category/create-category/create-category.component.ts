import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = {
    name:'',
    description:''
  }

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.category).subscribe((response) => {
      this.service.message('Category created Sucessfully')
      this.router.navigate(['categories'])
    }, err => {
      for(let i = 0; i< err.error.errors.length; i++){
        this.service.message(err.error.errors[i].message)
      }
    })
  }

  cancel():void{
    this.router.navigate(['categories'])
  }

}
