import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/model/User';
import * as UserActions from '../../state/user.actions';
import * as fromUser from '../../state/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  users: User[];
  constructor(private _formBuilder: FormBuilder, private _store: Store) { }

  ngOnInit(): void {
    this.buildForm();
    this.getUsers();
  }

  buildForm() {
    this.userForm = this._formBuilder.group({
      'name': [null, [Validators.required]],
      'friends': [null, Validators.required],
      'age': [null, [Validators.required, Validators.min(1), Validators.max(120)]],
      'weight': [null, [Validators.required, Validators.min(10), Validators.max(400)]],
      date: [new Date()]
    });
  }

  getUsers() {
    // getting users to display on page load 
    this._store.dispatch(new UserActions.LoadUsers());
    this._store.pipe(select(fromUser.getUser)).subscribe(users => {
      console.log('UsersComponent', users);
      this.users = users;
    })
  }
// submit form function
  onSubmit() {
    console.log(this.userForm)
    if (this.userForm.valid) {
      this._store.dispatch(new UserActions.CreateUser({ user: { ...this.userForm.value, friends: this.userForm.value.friends.split(',') } }));
      this.userForm.reset();
    }
  }
}
