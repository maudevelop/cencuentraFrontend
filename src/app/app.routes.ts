import { provideRouter, RouterConfig }  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogsignComponent } from './logsign/logsign.component'
const routes: RouterConfig = [

    {
        path: '',
        component: LogsignComponent
    },
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