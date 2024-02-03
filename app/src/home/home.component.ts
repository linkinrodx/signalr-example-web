import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
