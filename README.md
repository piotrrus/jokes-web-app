# Jokes
This project was generated with Angular CLI version 8.3.8.

# Development server
Run npm install to install all modules listed as dependencies in package.json.

Run ng serve for a dev server. Navigate to http://localhost:4200/.

# Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Description
App takes data from external Api and shows random joke on the screen.
User can add choosen joke to favourites and specify it's rate.

Material Design has been used to organise UI and graphical part of App.

All favourite joke can be shown on second page.
In case of invalid page - the 404 page will be shown.

App checks if joke is already in favourites.

After adding new favourite, message with notification will be shown on the screen, 
and button 'Add to favourite' will be blocked, until next joke button activate that button again.

In Favourite Page there's a possibility to clear all favourites.

I've addded some additional features:
- notification (ngx-toastr)
- joke rating (ng-starrating)

Format the dates in EU format:
I have used moment.js for formatting date.
Althought the simple DatePipe would be enough.

According to site below:
https://en.wikipedia.org/wiki/Date_and_time_notation_in_Europe

i've used format ISO 8601 - YYYY-MM-DD, most common in EU.

## Errors

Simple error notification were provided in case of problem with getting data form external Api.

## Tests

App has been tested manually with ng lint and ng build --prod.

## Data
Example data get from Api https://api.chucknorris.io/jokes/random

{

    "categories": [],
    "created_at": "2016-05-01 10:51:41.584544",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "g5WRr5V_T--bxb9XpqLsaA",
    "updated_at": "2016-05-01 10:51:41.584544",
    "url": "https://api.chucknorris.io/jokes/g5WRr5V_T--bxb9XpqLsaA",
    "value": "Chuck Norris bleeds awesomeness, not blood."

}

## App architecture and features
 - pages components
 - services
 - routing 
 - models (Joke model)
Usually i use page component as container (parent) for appropriate child components.
In this case it wasn't neccessary - the app is too simple.

## Components
Three component has been created for App - pages components (screen added).
- error page (404)
- joke page
- favourite jokes page

## Routing
Helps to navigate between pages.
Default page is joke.
Lazy loading for favourites page.

## Pipes
Used for formatting data (uppercase, date). No external pipes were used.

## Services
Two services has been created to handle with data for App:
 - joke.service for getting data from external Api.
 - favourite.service for handle favourite jokes, choosen by user. Also it checks if joke is already put into favourites.
