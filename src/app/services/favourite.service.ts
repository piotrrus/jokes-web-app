import { Injectable } from '@angular/core';
import { Joke } from '../models/Joke.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  public favouriteJokes: Joke[] = [];

  addToFavourite(jokeData) {
    const newJoke = new Joke();
    newJoke.id = jokeData.id;
    newJoke.date = moment(jokeData.created_at).format('YYYY-MM-DD');
    newJoke.url = jokeData.url.toUpperCase();
    newJoke.joke = jokeData.value.toUpperCase();
    newJoke.rating = jokeData.rating;
    this.favouriteJokes.push(newJoke);
  }

  checkIfExist(id: string): boolean {
    if (this.favouriteJokes.find(x => x.id === id)) {
      return true;
    }
    return false;
  }

  clearAll() {
    this.favouriteJokes = [];
  }

}
