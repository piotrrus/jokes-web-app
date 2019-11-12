import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/joke.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ToastrService } from 'ngx-toastr';
import { StarRatingComponent } from 'ng-starrating';
import { Joke } from '../../models/Joke.model';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.css']
})
export class JokesPageComponent implements OnInit {
  jokeData: any = [];
  favouriteJokes: Joke[] = [];
  rate: number;
  jokeExist = false;
  error = false;

  constructor(
    private jokesService: JokesService,
    private favouriteService: FavouriteService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getRandomJoke();
  }

  getRandomJoke() {
    this.rate = 5;

    this.jokesService.getRandomJoke().subscribe(data => {
      this.jokeData = data;
      this.jokeExist = this.favouriteService.checkIfExist(this.jokeData.id);
    },
      error => this.showErrorMessage()
    );
  }

  addToFavourite() {
    this.jokeData.rating = this.rate;
    this.favouriteService.addToFavourite(this.jokeData);
    this.jokeExist = this.favouriteService.checkIfExist(this.jokeData.id);
    this.showNewJokeMessage(this.jokeData.value);
  }

  onRate($event: {
    oldValue: number, newValue: number, starRating: StarRatingComponent
  }) {
    this.rate = $event.newValue;
  }

  showNewJokeMessage(joke: string) {
    this.toastr.success(joke, 'Added to Favourites');
  }

  showErrorMessage() {
    this.error = true;
    this.toastr.error('Could not load data', 'Error');
  }

}
