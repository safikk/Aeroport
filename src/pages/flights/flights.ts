import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleFlightPage } from './single-flight/single-flight';

/**
 * Generated class for the FlightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {

  constructor(public navCtrl: NavController) {
  }

  onLoadFlight(name: string) {
    this.navCtrl.push(SingleFlightPage, {flightName: name});
  }

}
