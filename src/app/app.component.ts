import { Component } from '@angular/core';
import { OreComponent } from './ore/ore.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  title = 'First Project';
  tvshow = 'suits';
  academy = [
    {name: 'Tosin', image: './assets/img/or.jpg', complexion:'black', hobbies: ['playing']},
    {name: 'Oreoluwa', image: './assets/img/or.jpg', complexion: 'yellow', hobbies:['playing']},
    {name: 'Ifemi', image: './assets/img/or.jpg', complexion: 'yellow', hobbies:['playing']},
    {name: 'Mimisola', image: './assets/img/or.jpg', complexion: 'yellow', hobbies:['playing']}
  ];
}