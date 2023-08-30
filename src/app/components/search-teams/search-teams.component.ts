import { Component } from '@angular/core';
import { BackendServiceService } from '../../services/backend-service.service';


@Component({
  selector: 'app-search-teams',
  templateUrl: './search-teams.component.html',
  styleUrls: ['./search-teams.component.css']
})
export class SearchTeamsComponent {
  public data:any;
  namesColumns: string[] = ['id', 'nombre', 'estadio', 'sitioWeb', 'nacionalida','fundacion','entrenador','capacidad', 'valor'];
  constructor(private backendService:BackendServiceService){
  }
  ngOnInit():void{
    this.getDataTeams()
    console.log(this.data)
  }
  
  public getDataTeams():void {
    this.backendService.getTeams().subscribe(res => this.data = res.content)
  }
  public test():void {
    console.log(this.data)
  }
}
