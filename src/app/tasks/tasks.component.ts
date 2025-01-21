import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy_task';
import { NewtaskComponent } from './newtask/newtask.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) userId !: string;
  @Input({required : true }) name !: string;
  isAddingTask = false;
  tasks = dummyTasks;
  static tid = 0;

  constructor(public tasksService : TasksService) {}

  get selectedUserTasks()
  {
    return this.tasksService.getUserTasks(this.userId);
}
  onCompleteTask(id : string)
  {
      this.tasks = this.tasks.filter( task => task.id !== id);
  }

  onStartAddTask()
  {
    this.isAddingTask = true;
  }
  onCloseTask()
  {
    this.isAddingTask = false
  }
  


}

