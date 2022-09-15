import { Component, OnInit } from '@angular/core';
import { Event } from '@app/_models';
import { DatePipe } from '@angular/common';
import { EventsListService } from '@app/services/events-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] | null;

  constructor(private eventListSevrvice: EventsListService) {
   
    this.eventListSevrvice.allEvents.subscribe((value) => {
      this.events = value; 
  });
  }

  ngOnInit(): void {
  }



}
