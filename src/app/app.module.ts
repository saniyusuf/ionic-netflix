import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudModule, CloudSettings } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Film } from '../providers/film'

import { FilmDetailPage } from '../pages/film-detail/film-detail';
import { Ionic2RatingModule } from 'ionic2-rating';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6dc8f9ab'
  }
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FilmDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FilmDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Film]
})
export class AppModule {}
