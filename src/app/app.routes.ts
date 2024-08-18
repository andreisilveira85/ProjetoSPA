import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SongsComponent } from './components/songs/songs.component';


export const routes: Routes = [
    {
        path: '' ,
        component:HomeComponent
    },
    {
        path: 'about', 
        component: AboutComponent,
        title: 'About',
        
    },
    {
        path: 'contact', 
        component: ContactComponent,
        title:'Contact'
    },
    {
        path: 'songs', 
        component: SongsComponent,
        title:'Songs'
    }, 
];
