import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Input({required : true }) uname !: string;
  @Input({required : true }) userId !: string;
  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  isEmpty = false;

  
  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }
 
  onSubmit(){
    if(this.enteredTitle.length == 0){
      this.isEmpty = true;
    }
    
    else
    {
      this.isEmpty = false;
      this.tasksService.addTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
      }, this.userId);
   this.close.emit();
    }
  }  
}
