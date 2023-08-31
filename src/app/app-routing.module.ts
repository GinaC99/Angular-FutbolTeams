import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchTeamsComponent } from './components/search-teams/search-teams.component';
import { TeamFormComponent } from './components/team-form/team-form.component';

const routes: Routes = [
  {
    path:'',
    component: SearchTeamsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forms',
    component: TeamFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
