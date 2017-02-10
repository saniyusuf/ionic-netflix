import { Component, ViewChild } from '@angular/core';

import { Slides, ModalController } from 'ionic-angular';

import { FilmDetailPage } from '../film-detail/film-detail';

import { Film } from '../../providers/film';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public films: any = [];
  @ViewChild('filmSlider') filmSlider: Slides;

  private trending: any;
  private topPicks: any;
  private featuredFilms: Array<any>;
  public paginationColors: Array<any>;

  constructor(private film: Film, private modalCtrl: ModalController) { }

  ionViewDidLoad(){
    this.film.getFilms()
      .map(res => res.json())
      .subscribe((films)=>{
        this.films = films;
        this.trending = this.films.filter(this.filterTrending);
        let trendingGrid: Array<Array<any>> =  Array();
        let rowNum = 0;
        for(let i=0; i<this.trending.length; i+=2){

          if(this.trending[i]){
            trendingGrid[rowNum] = Array();
            trendingGrid[rowNum][0] = this.trending[i];
          }

          if(this.trending[i+1]){
            trendingGrid[rowNum][1] = this.trending[i+1];
          }

          rowNum++;
        }
        this.trending = trendingGrid;

        this.topPicks = this.films.filter(this.filterTopPicks);
        let topPicksGrid: Array<Array<any>> =  Array();
        let topPicksRowNum = 0;
        for(let i=0; i<this.topPicks.length; i+=2){

          if(this.topPicks[i]){
            topPicksGrid[topPicksRowNum] = Array();
            topPicksGrid[topPicksRowNum][0] = this.topPicks[i];
          }

          if(this.topPicks[i+1]){
            topPicksGrid[topPicksRowNum][1] = this.topPicks[i+1];
          }

          topPicksRowNum++;
        }
        this.topPicks = topPicksGrid;

        this.featuredFilms = this.films.filter((film)=>{
          return film["Featured"] == true;
        });
        this.paginationColors = Array(this.featuredFilms.length);

        this.handlePagination();
      });

  }

  handlePagination(activeIndexParam?){
    let activeIndex = activeIndexParam || 0;
    this.featuredFilms.forEach((element, index)=>{
      if (index == activeIndex){
        this.paginationColors[index] ='#E40A13';
      } else {
      this.paginationColors[index] = '#C9C9C9';
      }
    });

  }

  sliderWillChange($event){
    this.handlePagination($event.activeIndex);
  }

  filterTrending(film){
    return film.Trending == true;
  }
  filterTopPicks(film){
    return film.TopPick == true;
  }

  openFilmDetailModal(imdbID){
    let selectedFilm = this.films.find((film)=>{
      return film.imdbID == imdbID;
    });
    let filmDetailModal = this.modalCtrl.create(FilmDetailPage, {
      film: selectedFilm
    });
    filmDetailModal.present();
  }

}
