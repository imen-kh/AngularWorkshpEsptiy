import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { Event } from '../../../models/event.model';


@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css'
})
export class DetailEventComponent {

  evenetDetails!: Event;
  id!: number;
  constructor(private ActRoute : ActivatedRoute, private data: DataService) { }

  ngOnInit(){
    console.log(this.ActRoute,);
    this.id = this.ActRoute.snapshot.params['id'];
    this.evenetDetails=this.data.getEventById(this.id);

}

  }