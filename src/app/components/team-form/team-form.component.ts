import { Component } from '@angular/core';
import { Team } from '../../models/team.model';
import { BackendServiceService } from '../../services/backend-service.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent {
  public teamModel:Team;
  public idNewTeam:Number;
  constructor (private backendService:BackendServiceService){
    this.teamModel = new Team();
    this.idNewTeam = 0;
  }

  public saveTeam():void{
    this.backendService.createTeam(this.teamModel).subscribe(res => this.idNewTeam = res.id);
    console.log(this.idNewTeam);
  }
}
