import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy_task';
import { NewtaskComponent } from './newtask/newtask.component';
import { NewTaskData } from './task/task.model';
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

  get selectedUserTasks()
  {
    console.log(this.userId);
    return this.tasks.filter( task => task.userId === this.userId );
  }
  onCompleteTask(id : string)
  {
      this.tasks = this.tasks.filter( task => task.id !== id);
  }

  onStartAddTask()
  {
    this.isAddingTask = true;
  }
  onCancelTask()
  {
    this.isAddingTask = false
  }
  onAddTask(taskdata :NewTaskData)
  {
       this.tasks.unshift({
        id: 't2',
        userId: this.userId,
        title: taskdata.title,
        summary:taskdata.summary,
        dueDate: taskdata.date,

       })
       this.isAddingTask=false;

  }
}

