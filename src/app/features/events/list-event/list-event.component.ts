import { Component } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

import { Event } from '../../../models/event.model';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent {
  searcheItem = '';
    eventList: Event[] = [];
  filteredList: Event[] = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.eventList = this.data.getEventList();
    this.filteredList = this.eventList;
  }

  incLikes(event: Event) {
    event.nbrLikes++;
  }

  buy(event: Event) {
    return event.nbPlaces--;
  }

  filter() {
    console.log(this.filteredList);
    return this.filteredList;
    //return this.data.getEventList().filter(
     // (eventItem) =>
    //    eventItem.titre
       //   .toLowerCase()
      //    .includes(this.searcheItem.toLowerCase()) ||
     //   eventItem.lieu.toLowerCase().includes(this.searcheItem.toLowerCase())
    //);
  }
}
