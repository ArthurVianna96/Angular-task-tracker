import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { 
    this.getTasks();
  }

  private getTasks(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => this.tasks = tasks);
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    );
  }

  updateReminder(task: ITask) {
    this.taskService.setReminder(task).subscribe();
    this.getTasks();
  }

  addTask(task: ITask) {
    this.taskService.addTask(task).subscribe(
      (task) => this.tasks = [...this.tasks, task]
    );
  }
}
