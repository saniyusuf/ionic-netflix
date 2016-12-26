import { Component } from '@angular/core';
import { NavParams, LoadingController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';


/*
  Generated class for the FilmDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html'
})
export class FilmDetailPage {
  public rating:any;
  public film: any;

  constructor(public navParams: NavParams, private loadingCtrl: LoadingController) {
    this.film = navParams.get('film');
    this.rating = Math.round(Number(this.film.imdbRating)/2)
  }

  share(){
    let shareLoader = this.loadingCtrl.create({
      content: 'Sharing....',
      showBackdrop: true,
      duration: 200
    });
    shareLoader.present();
    SocialSharing.share(this.film.Title, '', this.film.Poster);
  }

}
