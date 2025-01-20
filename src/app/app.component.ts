import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DUMMY_USERS } from '../user/dummy-users';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
}