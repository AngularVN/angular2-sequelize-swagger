import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { MenuService } from '../core/menu/menu.service';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { PaymentComponent } from './payment/payment.component';

import { SharedModule } from '../shared/shared.module';

import appMenu from './menu';
import appRoutes from './routes';

@NgModule({
  imports: [
    SharedModule,
    InfiniteScrollModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    HomeComponent,
    ItemComponent,
    PaymentComponent,
  ],
  providers: [],
  exports: [
    RouterModule,
    InfiniteScrollModule,
    HomeComponent,
    ItemComponent,
    PaymentComponent,
  ]
})

export class RoutesModule {
  constructor(private menu: MenuService) {
    menu.addMenu(appMenu);
  }
}
