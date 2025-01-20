import { Component, Input , Output , EventEmitter } from '@angular/core';

//import { Component,computed,signal } from '@angular/core';

//import { DUMMY_USERS } from './dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

/*export class UserComponent {
selectedUser = signal(DUMMY_USERS[randomIndex]);
imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar)

onSelectUser() {
//console.log('clicked!');
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
this.selectedUser.set(DUMMY_USERS[randomIndex]);
// this.selectedUser = DUMMY_USERS[randomIndex];
}
}*/



@Component({
selector: 'app-user',
standalone: true,
templateUrl: './user.component.html',
styleUrl: './user.component.css',
})
export class UserComponent {
@Input({required:true}) id!: string;
@Input({required:true}) avatar!: string;
@Input({required:true}) name!: string;
@Output() select = new EventEmitter();

// avatar=input.required<string>();
// name=input.required<string>();

// imagePath = computed( () => {
// return 'assets/users/' + this.avatar();
// })

get imagePath() {
return 'assets/user/' + this.avatar;
}

onSelectedUser() {
console.log(this.id);

this.select.emit(this.id);
}
}
