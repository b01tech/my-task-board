import { Component, input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [MatDivider],
  templateUrl: './colors-list.component.html',
})
export class ColorsListComponent {
  public categories = input<Category[]>([]);
}
