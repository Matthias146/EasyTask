import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // select = output<string>();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => '/users/' + this.selectedUser().avatar);
  // imagePath = computed(() => {
  //   return '/users/' + this.avatar();
  // });
  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onselectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('Selected User', this.selectedUser());
  }
}
