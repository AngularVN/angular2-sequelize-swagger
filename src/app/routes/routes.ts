import { LayoutComponent } from '../layout/layout.component';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './category/category.component';


const routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'item/:id', component: ItemComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: '**', redirectTo: 'home' }
    ]

  },

  // Not found
  { path: '**', redirectTo: 'home' }

];

export default routes;
