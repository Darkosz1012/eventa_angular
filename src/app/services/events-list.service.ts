import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '@app/_models';
import {BehaviorSubject, Subject} from 'rxjs';
import { first } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsListService {

  allEvents = new BehaviorSubject <Event[] | null>(null);
  eventsToEdit = new BehaviorSubject <Event[] | null>(null);
  joinedEvents = new BehaviorSubject <Event[] | null>(null);
  constructor(private http: HttpClient) {
    this.refresh();
    setInterval(()=>{
      this.refresh();
      },10000)
  }

  setAllEvents(data: Event[]) {
      this.allEvents.next(data);
  }
  setEventsToEdit(data: Event[]) {
    this.eventsToEdit.next(data);
  }
  setJoinedEvents(data: Event[]) {
    this.joinedEvents.next(data);
  }

  refreshAllEvents() {
    this.http.get<Event[]>(`${environment.apiUrl}/api/event/`).pipe(first()).subscribe((events:Event[]) => {
      if(JSON.stringify(events)!=JSON.stringify(this.allEvents.value)){
        this.setAllEvents(events)
      }
    });
    
  }
  refreshEventsToEdit() {
    this.http.get<Event[]>(`${environment.apiUrl}/api/event/toedit`).pipe(first()).subscribe((events:Event[]) => {
      if(JSON.stringify(events)!=JSON.stringify(this.eventsToEdit.value)){
        this.setEventsToEdit(events)
      }
    });
    
  }
  refreshJoinedEvents() {
    this.http.get<Event[]>(`${environment.apiUrl}/api/event/joined`).pipe(first()).subscribe((events:Event[]) => {
      if(JSON.stringify(events)!=JSON.stringify(this.joinedEvents.value)){
        this.setJoinedEvents(events)
      }
    });
    
  }

  refresh(){
    this.refreshAllEvents()
    this.refreshJoinedEvents()
    this.refreshEventsToEdit();
  }

  add(content:Event){
    return this.http.post<any>(`${environment.apiUrl}/api/event/`, { ...content })
  }
  update(content:Event){
    return this.http.put<any>(`${environment.apiUrl}/api/event/`, { ...content })
  }
  delete(content:Event){
    return this.http.delete(`${environment.apiUrl}/api/event/${content.id}`)
    
  }

  join(content:Event){
    return this.http.put<any>(`${environment.apiUrl}/api/event/join`, { ...content })
  }
  resign(content:Event){
    return this.http.put<any>(`${environment.apiUrl}/api/event/resign`, { ...content })
  }
  // delete(content:Event){
  //   return this.http.delete<any>(`${environment.apiUrl}/api/event/delete`, { content })
  // }
}
