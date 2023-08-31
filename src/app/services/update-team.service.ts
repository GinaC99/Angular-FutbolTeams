import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateTeamService {
  public idTeam:Number;

  constructor() {
    this.idTeam = 0;
  }
  public captureId(id?:Number):Number{
    return this.idTeam = id || this.idTeam
  }

}
