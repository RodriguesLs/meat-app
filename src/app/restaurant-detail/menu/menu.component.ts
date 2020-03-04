import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from '../../restaurants/restaurant.service'
import { MenuItem } from '../menu-item/menu-item.model'

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private _restaurantsService: RestaurantsService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this._restaurantsService
      .menuOfRestaurants(this._route.parent.snapshot.params['id ']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }
}
