import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() btnClick: EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  onDeleteTask(task: ITask): void {
    this.btnClick.emit(task);
  }

  onToggle(task: ITask) {
    this.onToggleReminder.emit(task);
  }
}
