import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FlightsPage } from '../pages/flights/flights';
import { SingleFlightPage } from '../pages/flights/single-flight/single-flight';
import { FlightsService } from '../services/flights.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlightsPage,
    SingleFlightPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlightsPage,
    SingleFlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlightsService
  ]
})
export class AppModule {}
