import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  name:String=""; 
  sayHello(event : any){
    this.name=event.target.value;
  }
}
