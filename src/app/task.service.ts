import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';

import { Task } from './task';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class TaskService {
  private baseURL = window.location.origin + '/api';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const url = this.baseURL + '/tasks';
    return this.http.get<{ results: Task[] }>(url).pipe(
      map(data => data.results),
      catchError(this.handleError)
    );
  }

  addTask(task: Partial<Task>): Observable<Task> {
    const url = this.baseURL + '/tasks';
    return this.http.post<Task>(url, task).pipe(
      catchError(this.handleError)
    );
  }

  updateTask(task: Partial<Task>): Observable<Task> {
    const url = this.baseURL + '/tasks/' + task.id;
    return this.http.patch<Task>(url, task).pipe(
      catchError(this.handleError)
    );
  }

  deleteTask(taskId: string): Observable<any> {
    const url = this.baseURL + '/tasks/' + taskId;
    return this.http.delete<Task>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let msg: string;
    if (error.error && error.error.message) {
      msg = error.error.message;
    } else if (error.message) {
      msg = error.message;
    } else {
      msg = `${error.status} - ${error.statusText || ''}`;
    }
    return _throw(msg);
  }

}
