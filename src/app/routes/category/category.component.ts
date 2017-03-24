import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from '../services/items.service';
@Component({
  selector: 'app-category',
  templateUrl: 'app/routes/category/category.component.html',
  providers: [ItemsService]
})
export class CategoryComponent implements OnInit {
  public items: Object = {};
  public page: number = 1;
  public limit: number = 10;
  constructor(private route: ActivatedRoute, private itemsservice: ItemsService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemsservice.getItems(this.page, this.limit, params['id']).subscribe(
        res => {
          this.items = res;
        },
        err => console.log(err)
      );
    });
  }

}
