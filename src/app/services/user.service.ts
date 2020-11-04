import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    // getting users list from localstorage
    const getUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    return of(getUsers);
  }


  createUser(data): Observable<User> {
    // setting users in localstorage
    const getUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    localStorage.setItem('users', JSON.stringify(getUsers.concat(data.payload.user)));
    return of(data.payload.user)
  }
}
