import { DatePipe, JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventsListService } from '@app/services/events-list.service';
import { Event } from '@app/_models';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: Event = {
    id: 0,
    name: "",
    start_date: new Date(),
    end_date: new Date(),
    description: "",
    type: "",
    address: "",
    city: "",
    img: "",
  };
  
  constructor(private _snackBar: MatSnackBar, private eventListSevrvice: EventsListService) { }


  pipe = new DatePipe('en-US');


  ngOnInit(): void {
  }

  formatDate(date: Date | undefined){
    if(date == undefined){
      return ""
    }
    return this.pipe.transform(date, 'dd/MM/yyyy');
  }

  clickJoin(){
    this.eventListSevrvice.join((this.event)).subscribe({
      next: data => {
        this._snackBar.open("The update of the event was successful.",undefined,{
          duration: 3000,
          
        });
          this.eventListSevrvice.refresh();
      },
      error: error => {
        this._snackBar.open("There was an error!",undefined,{
          duration: 3000,
          
        });
          console.error('There was an error!', error);
      }
    });
  }
  clickResign(){
    this.eventListSevrvice.resign((this.event)).subscribe({
      next: data => {
        this._snackBar.open("The update of the event was successful.",undefined,{
          duration: 3000,
          
        });
          this.eventListSevrvice.refresh();
      },
      error: error => {
        this._snackBar.open("There was an error!",undefined,{
          duration: 3000,
          
        });
          console.error('There was an error!', error);
      }
    });
  }

  test(data:Event){
    return JSON.stringify(data)
  }

}
