import { Component, OnInit } from '@angular/core';


import { ItemsService } from '../services/items.service';
@Component({
  selector: 'app-home',
  templateUrl: 'app/routes/home/home.component.html',
  providers: [ItemsService]
})
export class HomeComponent implements OnInit {
  public items: Object = {};
  constructor(private itemsservice: ItemsService) {}
  ngOnInit() {
    this.itemsservice.getItems().subscribe(
      res => {
        this.items = res;
        // console.log(this.items);
      },
      err => console.log(err)
    );
  }

}
