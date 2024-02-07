import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-old',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-old.component.html',
  styleUrl: './chat-old.component.scss'
})
export class ChatOldComponent {
  listMessage : any[] = [];
  newMessage: string = "";

  ngOnInit(){
    this.listMessage = [
      {
        "id" : "0",
        "authorId" : "1",
        "message" : "Hola Rodrigo"
      },
      {
        "id" : "1",
        "authorId" : "2",
        "message" : "Hola Carlitos"
      }
    ];
  }

  addMessage(){
    var msg = {
      "authorId" : "1",
      "message" : this.newMessage
    }
    this.listMessage.push(msg);
    this.newMessage = "";
  }
}

