import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { MenuService } from '../core/menu/menu.service';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './category/category.component';

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
    CategoryComponent,
    PaymentComponent
  ],
  providers: [],
  exports: [
    RouterModule,
    InfiniteScrollModule,
    HomeComponent,
    ItemComponent,
    CategoryComponent,
    PaymentComponent
  ]
})

export class RoutesModule {

}
