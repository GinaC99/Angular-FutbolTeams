import { Component, Inject } from '@angular/core';
import { BackendServiceService } from '../../services/backend-service.service';
import * as moment from 'moment'; 
import { SessionServiceService } from '../../services/session-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamFormComponent } from '../team-form/team-form.component';
import { UpdateTeamService } from 'src/app/services/update-team.service';

@Component({
  selector: 'app-search-teams',
  templateUrl: './search-teams.component.html',
  styleUrls: ['./search-teams.component.css']
})

export class SearchTeamsComponent {
  public data:any;
  public id:Number;
  public starDate:string;
  public endDate:string;
  public login:boolean;

  public namesColumns: string[] = ['id', 'nombre', 'estadio', 'sitioWeb', 'nacionalida','fundacion','entrenador','capacidad', 'valor','accion'];
  
  constructor(private backendService:BackendServiceService,
    private sessionService:SessionServiceService,
    private _router: Router,
    private updateId:UpdateTeamService,
    public dialog: MatDialog){
    this.id = 0;
    this.starDate = '';
    this.endDate = '';
    this.login = this.sessionService.isLogued();
  }
  
  ngOnInit():void{
    this.getDataTeams()
  }
  
  public getDataTeams():void {
    this.backendService.getTeams().subscribe(res => this.data = res.content)
  }

  public getDataId():void {
    this.backendService.searchIdTeam(this.id).subscribe(res => this.data = [res])
  }

  public searchTeamDate():void {
    this.backendService.searchDateTeam( moment(this.starDate).format("DD-MM-YYYY"),  moment(this.endDate).format("DD-MM-YYYY")).subscribe(res => this.data = res)
  }

  public choosSearchTeam():void {
    this.id > 0 
    ? this.getDataId()
    : this.starDate != '' && this.endDate != '' 
      ? this.searchTeamDate()
      : this.getDataTeams;
  }

  public logout():void{
    this.backendService.logout();
    this.login = this.sessionService.isLogued();
  }

  public goLogin():void{
    this._router.navigate(['/login']);
  }

  public createTeam():void{
    this.dialog.open(TeamFormComponent, {
      width:'50vw',
      height: '90vh'
    });
  }
  public updateTeam(id:Number):void{
    this.updateId.captureId(id)
    this.dialog.open(TeamFormComponent, {
      width:'50vw',
      height: '90vh'
    });
  }
  public deleteTeam(id:Number):void{
    this.backendService.deleteTeam(id).subscribe(res => {
      this.getDataTeams();
    });
  }

  public cleanFilters(){
    this.id = 0;
    this.starDate = '';
    this.endDate = ''
    this.getDataTeams()
  }
}
