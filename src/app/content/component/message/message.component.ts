import { Component, Input } from '@angular/core';
import { MessageType } from 'src/app/core/enums/message-type';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
 @Input() type: MessageType | null = null;
 @Input() message: string | null = null;

 constructor(){

 }
}
