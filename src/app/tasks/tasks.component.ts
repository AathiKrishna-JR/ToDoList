import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy_task';
import { NewtaskComponent } from './newtask/newtask.component';

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
}

