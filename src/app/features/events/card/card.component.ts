import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Event } from '../../../models/event.model';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // include Input decorator to receive event data from parent component
  @Input() item! : Event;
  @Output() notifLikeParent:EventEmitter<Event> = new EventEmitter<Event>();
  @Output() notifBuyParent:EventEmitter<Event> = new EventEmitter<Event>();

  likeEvent(item:Event){
    this.notifLikeParent.emit(item);}
 buyEvent(item:Event){
    this.notifBuyParent.emit(item);}


}
