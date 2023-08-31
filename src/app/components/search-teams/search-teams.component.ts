import { Component } from '@angular/core';
import { BackendServiceService } from '../../services/backend-service.service';
import * as moment from 'moment'; 
import { SessionServiceService } from '../../services/session-service.service';
import { Router } from '@angular/router';

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

  namesColumns: string[] = ['id', 'nombre', 'estadio', 'sitioWeb', 'nacionalida','fundacion','entrenador','capacidad', 'valor','accion'];
  
  constructor(private backendService:BackendServiceService,
    private sessionService:SessionServiceService,
    private _router: Router){
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
}
