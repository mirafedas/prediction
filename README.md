* Front-camp [facebook](https://www.facebook.com/groups/270300106928894)


## Project name: Prediction
[Demo](https://prediction-advice.herokuapp.com/)

> This project uses Advice Slip JSON API (https://api.adviceslip.com/#object-search-example). It shows advices and predictions. First you need to sign up, after that you are automatically redirected to sign in form. After signing in you can get a new prediction/advice, click the "Get prediction" buttons. Attention: password should include at least 6 symbols.
It is done using Angular CLI. Authentification is implemented using Firebase.


## Tech stack

* Angular 
* Bootstrap
* Firebase

## Mockups
[Link](https://wireframepro.mockflow.com/view/tic-tak-toe-by-mira#/page/D06054b0a207a376cdf3da80a29bd8453)   

## To-do:

* Add "Repeat password" field on login page;
* Add info messages (like "Signed up was successful, now you can log in!", "Logged in successfully, now you can get your prediction!"), warn messages ("To get a prediction, you need to sign in first!", "Account doesn't exist, sign up!" etc);
* Password now should include 6 symbols. Change this so it should include at least 1 uppercase and 1 lowercase letter and 1 number;
* Add max symbol number limit for each field to be 100;
* Configure AuthGuard so you cannot get the prediction unless you are signed in;
* Make the displayed prediction disapper when you go to another page;

