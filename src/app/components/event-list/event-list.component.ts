import { Component, OnInit } from '@angular/core';
import { Event } from '@app/_models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[]= [
    {
      id: 1,
      name: "test1",
      start_date: new Date(),
      end_date: new Date(),
      description: "test",
      type: "sport",
      address: "ul. Detla 108",
      city: "Kraków",
      img: "/assets/img/test.jpg",
    },
    {
      id: 2,
      name: "test2",
      start_date: new Date(),
      end_date: new Date(),
      description: "test",
      type: "music",
      address: "ul. Detla 108",
      city: "Kraków",
      img: "/assets/img/test.jpg",
    }
  ]

  pipe = new DatePipe('en-US');
  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date: Date){
    return this.pipe.transform(date, 'dd/MM/yyyy, h:mm');
  }

}
