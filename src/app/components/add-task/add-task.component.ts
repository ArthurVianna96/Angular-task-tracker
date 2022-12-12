import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/interfaces/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onNewTaskSubmit: EventEmitter<ITask> = new EventEmitter();
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(
        value => this.showAddTask = value
      );
  }

  onSubmit(): void {
    if(!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onNewTaskSubmit.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
