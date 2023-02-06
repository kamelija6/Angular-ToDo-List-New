import {
  Component,
  OnInit
} from '@angular/core';
import {
  Data
} from '@angular/router';
import {
  Task
} from 'src/app/model/task';
import {
  CrudTasksService
} from 'src/app/service/crud-tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todoTasks: Task = new Task();
  tasksArr: Task[] = [];

  addTaskName: string = '';
  addTaskData: string = '';
  addTaskStatus: string = '';
  editTaskName: string = '';
  editTaskData: string = '';
  editTaskStatus: string = '';

  constructor(private crudService: CrudTasksService) {
  }

  ngOnInit(): void {
    this.addTaskName = '';
    this.addTaskData = '';
    this.addTaskStatus = '';
    this.editTaskName = '';
    this.editTaskData = '';
    this.editTaskStatus = '';
    this.todoTasks = new Task();
    this.tasksArr = [];
    this.getAllTask();
  }

  getAllTask(): void {
    this.crudService.getAllTask().subscribe(res => {
      this.tasksArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

  addTask() {
    this.todoTasks.name = this.addTaskName;
    this.todoTasks.data = this.addTaskData;
    this.todoTasks.status = this.addTaskStatus;
    this.crudService.addTask(this.todoTasks).subscribe(res => {
      this.ngOnInit();
      this.addTaskName = '';
      this.addTaskData = '';
      this.addTaskStatus = '';
    }, err => {
      alert(err);
    })
  }

  editTask() {
    this.todoTasks.name = this.editTaskName;
    this.todoTasks.data = this.editTaskData;
    this.todoTasks.status = this.editTaskStatus;
    this.crudService.editTask(this.todoTasks).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to update task");
    })
  }

  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task");
    });
  }

  call(etask: Task) {
    this.todoTasks = etask;
    this.editTaskName = etask.name;
    this.editTaskData = etask.data;
    this.editTaskStatus = etask.status;
  }

  sortByDate() {
    return this.tasksArr.sort((a: any, b: any) => {
      return <any > new Date(a.data) - < any > new Date(b.data);
    });
  }

  sortByName() {
    return this.tasksArr.sort((x: any, y: any) => {
      if(y.name < x.name) return 1;
      if(y.name > x.name) return -1;
      return 0;

    });
  }





}
