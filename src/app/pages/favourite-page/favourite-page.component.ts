import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Joke } from '../../models/Joke.model';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.css']
})
export class FavouritePageComponent implements OnInit {

  favouriteJokes: Joke[] = [];

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.favouriteJokes = this.favouriteService.favouriteJokes;
    console.log(this.favouriteService.favouriteJokes);
  }

  clearAll() {
    this.favouriteService.clearAll();
    this.favouriteJokes = this.favouriteService.favouriteJokes;
  }
}
