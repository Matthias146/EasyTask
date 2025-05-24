import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'essentials';
  users = DUMMY_USERS;
  selecedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selecedUserId)!;
  }

  onselectUser(id: string) {
    this.selecedUserId = id;
    console.log('Selected User', id);
  }
}
