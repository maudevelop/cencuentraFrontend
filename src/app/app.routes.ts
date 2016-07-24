import { provideRouter, RouterConfig }  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogsignComponent } from './logsign/logsign.component';
import { NegociosComponent } from './negocios/negocios.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { EditarnegocioComponent } from './editarnegocio/editarnegocio.component';
import { AdminComponent } from './admin/admin.component';

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
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'negocios',
        component: NegociosComponent
    },
    {
        path: 'promociones',
        component: PromocionesComponent
    },
    {
        path: 'editarnegocio',
        component: EditarnegocioComponent
    }
];

export const appRouterProviders = [
  provideRouter(routes)
];