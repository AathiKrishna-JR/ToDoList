import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newtask',
  imports: [],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>()
  
  onCancel(){
    this.cancel.emit();
  }
 
}
