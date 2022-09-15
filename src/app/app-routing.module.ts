import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ManageEventsComponent } from './pages/manage-events/manage-events.component';
import { SignupComponent } from './pages/signup/signup.component';
import { YourEventsComponent } from './pages/your-events/your-events.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', component: HomeComponent,canActivate: [AuthGuard],children: [] },
  // { path: '', component: HomeComponent },
  { path: '', component: MainComponent,canActivate: [AuthGuard],children: [
    {
      path: '',
      component: HomeComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'your-events',
        component: YourEventsComponent
    },
    {
        path: 'manage-events',
        component: ManageEventsComponent
    }
] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
