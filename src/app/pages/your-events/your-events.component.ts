import { Component, OnInit } from '@angular/core';
import { EventsListService } from '@app/services/events-list.service';
import { Event } from '@app/_models';
@Component({
  selector: 'app-your-events',
  templateUrl: './your-events.component.html',
  styleUrls: ['./your-events.component.scss']
})
export class YourEventsComponent implements OnInit {

  events: Event[] | null;

  constructor(private eventListSevrvice: EventsListService) {
    this.eventListSevrvice.joinedEvents.subscribe((value) => {
        this.events = value; 
    });
  }

  ngOnInit(): void {
  }

}
