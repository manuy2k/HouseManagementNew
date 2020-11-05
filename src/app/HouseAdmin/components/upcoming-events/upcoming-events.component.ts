import { UpcomingEventsService } from './../../../Services/upcoming-events.service';
import { upcomingEventsFormat } from './../../upcomingEventsFormat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {


  constructor(public upes: UpcomingEventsService) { }
  staticItems:upcomingEventsFormat[];
  newEntry: upcomingEventsFormat = {
    eventName: '',
    eventDate: new Date(),
    eventType: '',
    eventDesc: ''
  };
  displayedColumns: string[] = ['Event Name', 'Event Date', 'Event Type', 'Event Description'];


  ngOnInit() {
    this.staticItems = this.upes.getData();
    this.upes.getObvData().subscribe((response:upcomingEventsFormat[]) => {
      this.staticItems = response;
    });
  }

  goEvent(){
    this.upes.addNewEntry(this.newEntry);
  }
}

