import { Component, Input } from '@angular/core';
import { Team } from '../../models/team.model';
import { BackendServiceService } from '../../services/backend-service.service';
import { UpdateTeamService } from 'src/app/services/update-team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent {
  public teamModel: Team;
  public idNewTeam: Number;
  public teamKeys: string[];
  public teamValues: any;
  public idTeam: Number;

  constructor(
    private backendService: BackendServiceService,
    private updateId: UpdateTeamService,
  ) {
    this.teamModel = new Team();
    this.idNewTeam = 0;
    this.teamKeys = Object.keys(this.teamModel);
    this.teamValues = Object.values(this.teamModel);
    this.idTeam = 0;
  }

  ngOnInit(): void {
    this.idTeam = this.updateId.getId();
    console.log(this.idTeam)
    if (this.idTeam > 0) {
      this.backendService.searchIdTeam(this.idTeam).subscribe(res => {
        this.teamModel = res
        this.teamKeys = Object.keys(this.teamModel);
        this.teamValues = Object.values(this.teamModel);
      })
    }
    else {
      this.teamModel = new Team();
    }


  }

  public saveTeam(): void {
    if (this.idTeam > 0) {
      this.backendService.updateTema(this.teamModel).subscribe(res => {
        this.backendService.getTeams();
      })
    } else {
      this.backendService.createTeam(this.teamModel).subscribe(res => {
        this.idNewTeam = res.id
      });
    }
  }
}
