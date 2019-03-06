import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  newTaskTitle = '';
  tasks: Task[] = [];
  errorMessage: '';
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks,
      error => this.errorMessage = error
    );
  }

  isDone(task: Task) {
    return task.status === 'done';
  }

  toggleStatus(task: Task) {
    this.errorMessage = '';
    const updatedTask: Task = {
      ...task,
      status: task.status === 'open' ? 'done' : 'open'
    };
    this.taskService.updateTask(updatedTask).subscribe(
      data => {
        task.status = updatedTask.status;
      },
      error => this.errorMessage = error
    );
    task.status = task.status === 'open' ? 'done' : 'open';
  }

  removeTask(task: Task) {
    this.errorMessage = '';
    this.taskService.deleteTask(task.id).subscribe(
      value => this.tasks = this.tasks.filter(t => t !== task),
      error => this.errorMessage = error
    );
  }

  addTask() {
    this.taskService.addTask({ title: this.newTaskTitle, status: 'open' }).subscribe(
      task => this.tasks.unshift(task),
      error => this.errorMessage = error
    );
    this.newTaskTitle = '';
  }
}
