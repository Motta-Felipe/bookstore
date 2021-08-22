import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
  selector: "app-update-category",
  templateUrl: "./update-category.component.html",
  styleUrls: ["./update-category.component.css"],
})
export class UpdateCategoryComponent implements OnInit {
  category: Category = {
    id: "",
    name: "",
    description: "",
  };

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById() {
    this.service.findById(this.category.id!).subscribe((response) => {
      this.category = response;
    });
  }

  update(): void {
    this.service.update(this.category).subscribe((response) => {
      this.router.navigate(['categories'])
      this.service.message('Category update Successfully')

    }, err => {
      this.service.message('Verify that all fields are filled correctly')
    })
  }
  cancel(): void {
    this.router.navigate(['categories'])
  }

}
