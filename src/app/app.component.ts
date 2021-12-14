import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  isThisIngredientVital:boolean = true;
  displayGuestList:boolean = true;

  songList:string[] = ['Chanson 1', 'Chanson 2', 'Chanson 3', 'Chanson 4'];
}
