import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventsListService } from '@app/services/events-list.service';
import { Event } from '@app/_models';
@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent implements OnInit {
  eventForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  // hide = true;

  @Input() event: Event = {
    id: 0,
    name: "",
    // start_date: new Date(),
    // end_date: new Date(),
    description: "",
    type: "",
    address: "",
    city: "",
    max: 1,
    img: "",
  };
  @Output() cancel = new EventEmitter<any>();
  
  constructor(
    private formBuilder: FormBuilder,
    private eventListSevrvice: EventsListService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      id: [this.event.id],
      name:[this.event.name, Validators.required],
      start_date: [this.event.start_date, Validators.required],
      end_date: [this.event.end_date, Validators.required],
      city : [this.event.city, Validators.required],
      address : [this.event.address, Validators.required],
      type: [this.event.type, Validators.required],
      max: [this.event.max, Validators.required],
      description: [this.event.description],
      img:[null],
    });

  }
  // convenience getter for easy access to form fields
  get f() { return this.eventForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventForm.invalid) {
        return;
    }

    this.loading = true;

    var data: Event = {
        id: this.f['id'].value,
        name: this.f['name'].value,
        start_date: this.f['start_date'].value,
        end_date: this.f['end_date'].value,
        description: this.f['description'].value,
        type: this.f['type'].value,
        address: this.f['address'].value,
        city: this.f['city'].value,
        max: this.f['max'].value,
        img: this.f['img'].value,
    }

    if(this.event.id==0 ){
      this.eventListSevrvice.add((data)).subscribe({
        next: data => {
          this._snackBar.open("The event was added successfully.",undefined,{
            duration: 3000,
            
          });
            this.eventListSevrvice.refresh();
            this.cancel.emit();
        },
        error: error => {
          this._snackBar.open("There was an error!",undefined,{
            duration: 3000,
            
          });
            console.error('There was an error!', error);
        }
      });
    }else{
      this.eventListSevrvice.update((data)).subscribe({
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
    
  }
  deleteEvent(){
    this.eventListSevrvice.delete(this.event).subscribe({
      next: data => {
        this._snackBar.open("The event removal was successful.",undefined,{
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
}
