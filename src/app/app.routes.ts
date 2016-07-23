import { provideRouter, RouterConfig }  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: RouterConfig = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];