import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../service/catagory.service';  

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { } // Adım 3
  categories: Category[];
  selectedCategory: Category;

  getCategories() {
    this.categoryService.getCategories().subscribe(response => this.categories = response);
  }
  ngOnInit() {
    this.getCategories();
  }
  onSelect(category?: Category) {
    if (category) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = null;
    }
  }

}
