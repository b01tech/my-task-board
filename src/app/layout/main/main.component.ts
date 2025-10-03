import { Component } from '@angular/core';
import { CategoriesComponent } from '../../features/categories/view/categories/categories.component';
import { MatDividerModule } from '@angular/material/divider';
import { TasksComponent } from '../../features/tasks/view/tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CategoriesComponent, MatDividerModule, TasksComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
