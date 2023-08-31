import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

// Session Services
import { SessionServiceService } from './services/session-service.service';


// Components
import { LoginComponent } from './components/login/login.component';
import { SearchTeamsComponent } from './components/search-teams/search-teams.component';
import { TeamFormComponent } from './components/team-form/team-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchTeamsComponent,
    TeamFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [SessionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
