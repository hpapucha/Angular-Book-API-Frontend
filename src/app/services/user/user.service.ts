import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; //
import { Subject } from 'rxjs';

const appUrl = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;
  searchSubject = new Subject();
  constructor(private http: HttpClient, private router: Router) { console.log('user service loaded'); }

  registerUser(newUser): any {
    console.log(newUser);
    return this.http
      .post(`${appUrl}/auth/users/register`, newUser);
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
        this.currentUser = user.email;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/books']);
      }, err => console.log(err));
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = null;
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }
}
