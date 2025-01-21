import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }
 
  onSubmit(){
    this.add.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    })


  }  
}
