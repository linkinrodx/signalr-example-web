import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatOldComponent } from './chat-old/chat-old.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'chat-old', component: ChatOldComponent },
    { path: '**', component: HomeComponent }
];
