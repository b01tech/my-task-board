import { Component, inject } from '@angular/core';
import { ColorsListComponent } from '../../components/colors-list/colors-list.component';
import { MainListComponent } from '../../components/main-list/main-list.component';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ColorsListComponent, MainListComponent],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  private categoryService = inject(CategoryService);
  public categories = this.categoryService.categories;
}
