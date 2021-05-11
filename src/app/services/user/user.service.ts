import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const appUrl = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { console.log('user service loaded'); }

  registerUser(newUser): void {
    console.log(newUser);
    this.http
      .post(`${appUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response), err => console.log(err));
  }
  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${appUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
      }, err => console.log(err));
  }
}
