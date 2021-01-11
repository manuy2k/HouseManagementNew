import { upcomingEventsFormat } from './../HouseAdmin/upcomingEventsFormat';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingEventsService {


  staticEventsList: upcomingEventsFormat[] = [
    {
      eventName:"Vakeel Saab",
      eventDate:new Date('2020-02-30'),
      eventType:"Movie",
      eventDesc:"Poyi kottinchukundham padha mama"

    },
    {
      eventName:"PSPK 28",
      eventDate:new Date('2021-03-30'),
      eventType:"Movie",
      eventDesc:"Malli poyi kottinchukundham padha mama"

    },
    {
      eventName:"Ananthagiri Hills",
      eventDate:new Date('2021-04-30'),
      eventType:"Trip",
      eventDesc:"Ananthagiri anta poyi chindhuleddam"

    },
    {
      eventName:"Wonderla",
      eventDate:new Date('2020-05-30'),
      eventType:"Trip",
      eventDesc:"Wonderla lo chill cheddam"

    },
    {
      eventName:"Kitchen Cleaning",
      eventDate:new Date('2020-06-10'),
      eventType:"Maintenance",
      eventDesc:"Bane egiram ga, inka ra cleaning cheddam"
    },
    {
      eventName:"Hall Cleaning",
      eventDate:new Date('2020-07-12'),
      eventType:"Maintenance",
      eventDesc:"Kitchen aypoindhi, next hall undhi padha"
    },
    {
      eventName:"Pelli shopping",
      eventDate:new Date('2020-07-16'),
      eventType:"Shopping",
      eventDesc:"Raju gadi pelli ki blazer theeskovali"
    },
    {
      eventName:"Pelli shopping 2",
      eventDate:new Date('2020-07-18'),
      eventType:"Shopping",
      eventDesc:"Raju gadi pelli ki underwear konali"
    },
    {
      eventName:"Dry Fruits",
      eventDate:new Date('2020-07-20'),
      eventType:"Shopping",
      eventDesc:"Begum bazar lo Giri gadu dry fruits kontunnadu, kavalsinollu randi"
    },
    {
      eventName:"Bike Service",
      eventDate:new Date('2020-07-26'),
      eventType:"Others",
      eventDesc:"Bike servicing ki ivvali kudhirinollu icheyyandi"
    }
  ];

  private msg = new Subject<upcomingEventsFormat[]>();
  constructor() { }

  getData(){
    return [...this.staticEventsList];
  }

  addNewEntry(i:upcomingEventsFormat){
    const temp = {
      eventName: i.eventName,
      eventDate: i.eventDate,
      eventDesc: i.eventDesc,
      eventType: i.eventType
    };
    this.staticEventsList.push(temp);
    this.msg.next([...this.staticEventsList]);
  }

  getObvData(){
    return this.msg.asObservable();
  }
}
