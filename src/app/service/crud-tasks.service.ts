import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudTasksService {


  apiUrl : string;

  constructor(private http: HttpClient ) {
    this.apiUrl = 'http://localhost:3000/tasks';
   }

   addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task);
  }

  getAllTask() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task : Task) : Observable<Task> {
    return this.http.delete<Task>(this.apiUrl+'/'+task.id);
  }

  editTask(task : Task) : Observable<Task> {
    return this.http.put<Task>(this.apiUrl+'/'+task.id,task);
  }

  
}
