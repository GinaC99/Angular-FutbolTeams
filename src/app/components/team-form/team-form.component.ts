import { Component } from '@angular/core';
import { Team } from '../../models/team.model';
import { BackendServiceService } from '../../services/backend-service.service';
import { UpdateTeamService } from 'src/app/services/update-team.service';

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
  public namesColumns: string[];
  public idTeam:Number;
  public dataTeam:Object;
  constructor (
    private backendService:BackendServiceService,
    private updateId:UpdateTeamService,
    ){
    this.teamModel = new Team();
    this.idNewTeam = 0;
    this.namesColumns = Object.getOwnPropertyNames(this.teamModel);
    this.idTeam = 0;
    this.dataTeam = {}
  }

  ngOnInit():void{
    this.idTeam = this.updateId.captureId();
    if (this.idTeam > 0){
      this.backendService.searchIdTeam(this.idTeam).subscribe(res => this.dataTeam = res)
    }
  }

  public saveTeam():void{
    this.backendService.createTeam(this.teamModel).subscribe(res => this.idNewTeam = res.id);
    console.log(this.idNewTeam);
  }
}
