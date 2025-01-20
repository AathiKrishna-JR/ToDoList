import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DUMMY_USERS } from '../user/dummy-users';
import { UserComponent } from '../user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  SelectedUserId = 'u1';
  
  get selectedUser()
  {
    return this.users.find((user) => user.id === this.SelectedUserId)!;

  }
  onSelectUser(id : string)
  {
    this.SelectedUserId = id;
  }
}