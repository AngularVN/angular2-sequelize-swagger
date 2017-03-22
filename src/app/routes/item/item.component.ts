import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from './../services/items.service';
import { SessionService } from './../../shared/services/session';

@Component({
  selector: 'app-item',
  templateUrl: 'app/routes/item/item.component.html',
  providers: [ItemsService]
})
export class ItemComponent implements OnInit {
  public item: any = {}
  constructor(private route: ActivatedRoute, private session: SessionService, private itemsservice: ItemsService) {}
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.itemsservice.getItemId(params['id']).subscribe(
        res => {
          this.item = res;
          this.item.qty = 1;
        },
        err => console.log(err)
      );
    });
  }

  public order() {
    this.session.set('order', this.item);
    window.location.href = '#/payment';
  }
}
