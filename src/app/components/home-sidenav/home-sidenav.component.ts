import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sidenav',
  templateUrl: './home-sidenav.component.html',
  styleUrls: ['./home-sidenav.component.scss']
})
export class HomeSidenavComponent implements OnInit {
  isExpanded: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
