import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userLoginView } from '../../models/userLoginView.model';
import { BackendServiceService } from '../../services/backend-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public hide: boolean;
  public userView: userLoginView;
  public data: any;

  constructor(private backendService: BackendServiceService,
    private _router: Router) {
    this.userView = new userLoginView();
    this.hide = true;
  }

  public login(): void {
    this.backendService.login(this.userView);
    this._router.navigate(['/']);
  }

}
