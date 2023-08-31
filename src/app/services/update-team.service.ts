import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateTeamService {
  private idTeam:Number;

  constructor() {
    this.idTeam = 0;
  }
  public captureId(id:Number):void{
    this.idTeam = id;
  }
  public getId():Number {
    return this.idTeam;
  }

}
