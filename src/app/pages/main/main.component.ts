import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( protected authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
