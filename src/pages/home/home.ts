import { Component, ViewChild } from '@angular/core';

import { NavController, Slides, ModalController } from 'ionic-angular';

import { FilmDetailPage } from '../film-detail/film-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public films = [
    {
      "Title": "Fantastic Beasts and Where to Find Them",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "18 Nov 2016",
      "Runtime": "133 min",
      "Genre": "Adventure, Family, Fantasy",
      "Director": "David Yates",
      "Writer": "J.K. Rowling",
      "Actors": "Eddie Redmayne, Sam Redford, Scott Goldman, Tim Bentinck",
      "Plot": "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
      "Language": "English",
      "Country": "UK, USA",
      "Awards": "1 nomination.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SX300.jpg",
      "Metascore": "66",
      "imdbRating": "7.9",
      "imdbVotes": "75,816",
      "imdbID": "tt3183660",
      "Type": "movie",
      "Response": true,
      "Preview": "http://i.giphy.com/l0MYPWNTX1mgHSI1i.gif",
      "Featured": true,
      "FeaturedImage": "http://www.fuse.tv/image/576177c377917de868000018/816/545/fantastic-beasts-and-where-to-find-them-movie-poster-homepage-size.jpg"
    },
    {
      "Title": "The Jungle Book",
      "Year": "2016",
      "Rated": "PG",
      "Released": "15 Apr 2016",
      "Runtime": "106 min",
      "Genre": "Adventure, Drama, Family",
      "Director": "Jon Favreau",
      "Writer": "Justin Marks (screenplay), Rudyard Kipling (based on the books by)",
      "Actors": "Neel Sethi, Bill Murray, Ben Kingsley, Idris Elba",
      "Plot": "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther, Bagheera, and free spirited bear, Baloo.",
      "Language": "English",
      "Country": "UK, USA",
      "Awards": "7 wins & 20 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg",
      "Metascore": "77",
      "imdbRating": "7.6",
      "imdbVotes": "162,355",
      "imdbID": "tt3040964",
      "Type": "movie",
      "Response": true,
      "Preview": "http://i.giphy.com/l0MYGkOTBs7uA73Rm.gif",
      "Featured": true,
      "FeaturedImage": "http://cdn1-www.comingsoon.net/assets/uploads/gallery/the-jungle-book/junglebooktriptychgallery.jpg"    
    },
    {
      "Title": "Suicide Squad",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "05 Aug 2016",
      "Runtime": "123 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "David Ayer",
      "Writer": "David Ayer",
      "Actors": "Will Smith, Jaime FitzSimons, Ike Barinholtz, Margot Robbie",
      "Plot": "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
      "Language": "English, Japanese, Spanish",
      "Country": "USA",
      "Awards": "4 wins & 7 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "Metascore": "40",
      "imdbRating": "6.5",
      "imdbVotes": "294,525",
      "imdbID": "tt1386697",
      "Type": "movie",
      "Response": true,
      "Trending": true,
      "Preview": "http://i.giphy.com/3oz8xDX2GcLQOw64AE.gif"
    },
    {
      "Title": "Star Trek Beyond",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "22 Jul 2016",
      "Runtime": "122 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Justin Lin",
      "Writer": "Simon Pegg, Doug Jung, Gene Roddenberry (television series \"Star Trek\")",
      "Actors": "Chris Pine, Zachary Quinto, Karl Urban, Zoe Saldana",
      "Plot": "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy who puts them and everything the Federation stands for to the test.",
      "Language": "English",
      "Country": "USA",
      "Awards": "6 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjcxNGU3ZTUtMDczNy00ZThiLWI4NmYtMDJkY2Q4YTU2ZjA5XkEyXkFqcGdeQXVyNjM1MTQ0NTQ@._V1_SY1000_CR0,0,660,1000_AL_.jpg",
      "Metascore": "68",
      "imdbRating": "7.2",
      "imdbVotes": "124,693",
      "imdbID": "tt2660888",
      "Type": "movie",
      "Response": true,
      "Trending": true,
      "Preview": "http://i.giphy.com/l4Jz8OoCym22Z0mre.gif"
    },
    {
      "Title": "Ghostbusters",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "15 Jul 2016",
      "Runtime": "116 min",
      "Genre": "Action, Comedy, Fantasy",
      "Director": "Paul Feig",
      "Writer": "Katie Dippold, Paul Feig, Ivan Reitman (based on the 1984 film \"Ghostbusters\" directed by), Dan Aykroyd (based on the 1984 film \"Ghostbusters\" written by), Harold Ramis (based on the 1984 film \"Ghostbusters\" written by)",
      "Actors": "Zach Woods, Kristen Wiig, Ed Begley Jr., Charles Dance",
      "Plot": "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
      "Language": "English",
      "Country": "USA, Australia",
      "Awards": "7 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3OTM4NTM4NV5BMl5BanBnXkFtZTgwOTI3NDc0OTE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
      "Metascore": "60",
      "imdbRating": "5.4",
      "imdbVotes": "119,913",
      "imdbID": "tt1289401",
      "Type": "movie",
      "Response": true,
      "Trending": true,
      "Preview": "http://i.giphy.com/l4JzcYMeQrv1BG8Io.gif"
    },
    {
      "Title": "The Secret Life of Pets",
      "Year": "2016",
      "Rated": "PG",
      "Released": "08 Jul 2016",
      "Runtime": "87 min",
      "Genre": "Animation, Adventure, Comedy",
      "Director": "Chris Renaud, Yarrow Cheney",
      "Writer": "Cinco Paul, Ken Daurio, Brian Lynch, Simon Rich (additional characters created by)",
      "Actors": "Louis C.K., Eric Stonestreet, Kevin Hart, Jenny Slate",
      "Plot": "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
      "Language": "English",
      "Country": "USA, Japan",
      "Awards": "1 win & 1 nomination.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_.jpg",
      "Metascore": "61",
      "imdbRating": "6.6",
      "imdbVotes": "75,106",
      "imdbID": "tt2709768",
      "Type": "movie",
      "Response": true,
      "Trending": true,
      "Preview": "http://i.giphy.com/26gJAmgrF2dTHplmg.gif"
    },
    {
      "Title": "Neighbors 2: Sorority Rising",
      "Year": "2016",
      "Rated": "R",
      "Released": "20 May 2016",
      "Runtime": "92 min",
      "Genre": "Comedy",
      "Director": "Nicholas Stoller",
      "Writer": "Andrew Jay Cohen, Brendan O'Brien, Nicholas Stoller, Evan Goldberg, Seth Rogen, Andrew Jay Cohen (based on characters created by), Brendan O'Brien (based on characters created by)",
      "Actors": "Seth Rogen, Zac Efron, Rose Byrne, Chloë Grace Moretz",
      "Plot": "When their new next-door neighbors turn out to be a sorority even more debaucherous than the fraternity previously living there, Mac and Kelly team with their former enemy, Teddy, to bring the girls down.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 wins & 2 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
      "Metascore": "58",
      "imdbRating": "5.8",
      "imdbVotes": "59,497",
      "imdbID": "tt4438848",
      "Type": "movie",
      "Response": true,
      "TopPick": true,
      "Preview": "http://i.giphy.com/3o7TKyx6EIbTiPkX6g.gif"
    },
    {
      "Title": "High Strung",
      "Year": "2016",
      "Rated": "PG",
      "Released": "08 Apr 2016",
      "Runtime": "96 min",
      "Genre": "Drama, Music, Romance",
      "Director": "Michael Damian",
      "Writer": "Janeen Damian, Michael Damian",
      "Actors": "Keenan Kampa, Nicholas Galitzine, Sonoya Mizuno, Jane Seymour",
      "Plot": "When a hip hop violinist busking in the New York subway encounters a classical dancer on scholarship at the Manhattan Conservatory of the Arts, sparks fly. With the help of a hip hop dance ...",
      "Language": "English",
      "Country": "USA, Romania",
      "Awards": "N/A",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNTExMDE1OV5BMl5BanBnXkFtZTgwNzg3OTMwODE@._V1_.jpg",
      "Metascore": "48",
      "imdbRating": "6.5",
      "imdbVotes": "3,966",
      "imdbID": "tt3451230",
      "Type": "movie",
      "Response": true,
      "TopPick": true,
      "Preview": "http://i.giphy.com/26FLcGb1WNLyiOvF6.gif"
    },
    {
      "Title": "How to Be Single",
      "Year": "2016",
      "Rated": "R",
      "Released": "12 Feb 2016",
      "Runtime": "110 min",
      "Genre": "Comedy, Romance",
      "Director": "Christian Ditter",
      "Writer": "Abby Kohn (screenplay), Marc Silverstein (screenplay), Dana Fox (screenplay), Abby Kohn (screen story), Marc Silverstein (screen story), Liz Tuccillo (book)",
      "Actors": "Dakota Johnson, Rebel Wilson, Leslie Mann, Damon Wayans Jr.",
      "Plot": "A group of young adults navigate love and relationships in New York City.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzI4MDMwMzUwNF5BMl5BanBnXkFtZTgwMDgyNzkyNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "Metascore": "51",
      "imdbRating": "6.1",
      "imdbVotes": "49,525",
      "imdbID": "tt1292566",
      "Type": "movie",
      "Response": true,
      "TopPick": true,
      "Preview": "http://i.giphy.com/l0MYGtTuNxpUEi6Gc.gif"
    },
    {
      "Title": "A Hologram for the King",
      "Year": "2016",
      "Rated": "R",
      "Released": "28 Apr 2016",
      "Runtime": "98 min",
      "Genre": "Comedy, Drama",
      "Director": "Tom Tykwer",
      "Writer": "Dave Eggers (novel), Tom Tykwer (screenplay)",
      "Actors": "Tom Hanks, Alexander Black, Sarita Choudhury, Sidse Babett Knudsen",
      "Plot": "A failed American sales rep looks to recoup his losses by traveling to Saudi Arabia and selling his company's product to a wealthy monarch.",
      "Language": "English, Arabic",
      "Country": "UK, France, Germany, USA, Mexico",
      "Awards": "2 wins & 1 nomination.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2MzU1NTg4NV5BMl5BanBnXkFtZTgwNzQ5MjAzODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "Metascore": "58",
      "imdbRating": "6.1",
      "imdbVotes": "20,567",
      "imdbID": "tt2980210",
      "Type": "movie",
      "Response": true,
      "TopPick": true,
      "Preview": "http://i.giphy.com/l0MYsBgwjOBP0KdKU.gif"
    },
    {
      "Title": "Arrival",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "11 Nov 2016",
      "Runtime": "116 min",
      "Genre": "Drama, Mystery, Sci-Fi",
      "Director": "Denis Villeneuve",
      "Writer": "Eric Heisserer (screenplay), Ted Chiang (based on the story \"Story of Your Life\" written by)",
      "Actors": "Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg",
      "Plot": "A linguist is recruited by the military to assist in translating alien communications.",
      "Language": "English, Russian, Mandarin",
      "Country": "USA",
      "Awards": "3 wins & 21 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
      "Metascore": "81",
      "imdbRating": "8.4",
      "imdbVotes": "78,074",
      "imdbID": "tt2543164",
      "Type": "movie",
      "Response": true,
      "Preview": "http://i.giphy.com/26FLgufmHd6dzUaRO.gif",
      "Featured": true,
      "FeaturedImage": "http://ynuk.tv/wp-content/uploads/2016/10/fullsizeoutput_3eea-e1476536972183.jpeg"  
    }
  ];
  @ViewChild('filmSlider') filmSlider: Slides;

  options = {
    pager: true
  }

  private trending: any;
  private topPicks: any;
  private featuredFilms: Array<any>;
  public paginationColors: Array<any>;

  constructor(public navCtrl: NavController, private modatCtrl: ModalController) { }

  ionViewWillEnter(){
    this.trending = this.films.filter(this.fiterTrending);
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

    this.topPicks = this.films.filter(this.fiterTopPicks);
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

  fiterTrending(film){
    return film.Trending == true;
  }
  fiterTopPicks(film){
    return film.TopPick == true;
  }

  openFilmDetailModal(imdbID){
    let selectedFilm = this.films.find((film)=>{
      return film.imdbID == imdbID;
    });
    let filmDetailModal = this.modatCtrl.create(FilmDetailPage, {
      film: selectedFilm
    });
    filmDetailModal.present();
  }

}
