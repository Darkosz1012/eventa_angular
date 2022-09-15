import { Component, OnInit } from '@angular/core';
import { EventsListService } from '@app/services/events-list.service';
import { Event } from '@app/_models';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent implements OnInit {
  events: Event[] | null;

  newEvent = false;

  constructor(private eventListSevrvice: EventsListService) {
    this.eventListSevrvice.eventsToEdit.subscribe((value) => {
        this.events = value; 
    });
  }

  ngOnInit(): void {
  }

}
