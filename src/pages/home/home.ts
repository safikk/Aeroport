import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FlightsPage } from '../flights/flights';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  flightsPage = FlightsPage;



}