import { Component, input } from '@angular/core';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-main-list',
  standalone: true,
  imports: [],
  templateUrl: './main-list.component.html',
})
export class MainListComponent {
  public categories = input.required<Category[]>();
}
