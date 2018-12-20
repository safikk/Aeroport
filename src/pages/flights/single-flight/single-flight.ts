import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FlightsService } from '../../../services/flights.service';
import { Flight } from '../../../models/Flight';

/**
 * Generated class for the SingleFlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-flight',
  templateUrl: 'single-flight.html',
})
export class SingleFlightPage implements OnInit{

  index: number;
  flight: Flight;

  constructor(public navParams: NavParams,
              private flightsService: FlightsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');

    this.flight = this.flightsService.flights[this.index];

  }
}
