import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ronit Dhera';
  task = "";
  tasklist: { id: number; task: string }[] = [];
  completedTasks: { id: number; task: string }[] = [];

  add() {
    if (this.task.trim() !== '') {
      this.tasklist.push({ id: this.tasklist.length + 1, task: this.task });
      this.task = "";
    }
  }

  del(taskId: number) {
    this.tasklist = this.tasklist.filter(item => item.id !== taskId);
    this.completedTasks = this.completedTasks.filter(item => item.id !== taskId);
  }

  complete(taskId: number) {
    const task = this.tasklist.find(t => t.id === taskId);
    if (task) {
      this.tasklist = this.tasklist.filter(t => t.id !== taskId);
      this.completedTasks.push(task);
    }
  }

  undo(taskId: number) {
    const task = this.completedTasks.find(t => t.id === taskId);
    if (task) {
      this.completedTasks = this.completedTasks.filter(t => t.id !== taskId);
      this.tasklist.push(task);
    }
  }
}
