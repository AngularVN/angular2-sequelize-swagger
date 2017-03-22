import { LayoutComponent } from '../layout/layout.component';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { PaymentComponent } from './payment/payment.component';


const routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'item/:id', component: ItemComponent },
      { path: '**', redirectTo: 'home' }
    ]

  },

  // Not found
  { path: '**', redirectTo: 'home' }

];

export default routes;
