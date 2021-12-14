import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Houston',
    firstName : 'Whitney',
    age : "J'suis plus très fraîche...",
    quote : '',
    photo : 'https://www.superprof.fr/blog/wp-content/uploads/2020/11/chanter-musique-dansante.png'
    };

    ageVisible = false;

    showAge() {
      this.ageVisible = true;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
