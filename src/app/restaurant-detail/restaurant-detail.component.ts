import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from '../restaurants/restaurant.service'
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private _restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this._restaurantsService.restaurantById(this.route.snapshot.params['id '])
      .subscribe(restaurant => this.restaurant = restaurant)
  }
}
