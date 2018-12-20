import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleFlightPage } from './single-flight/single-flight';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../models/Flight';

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

  flights: Flight[];

  constructor(public navCtrl: NavController,
              private flightsService: FlightsService) {
  }

  ionViewDidLoad() {
    this.flights = this.flightsService.flights;
  }
  onLoadFlight(i: number) {
    this.navCtrl.push(SingleFlightPage, {index: i});
  }
}

