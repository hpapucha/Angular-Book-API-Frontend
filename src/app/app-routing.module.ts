import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent} from './book/book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { LogoutComponent} from './logout/logout.component';
import { SinglebookComponent} from './singlebook/singlebook.component';


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'books/:id',
    component: SinglebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
