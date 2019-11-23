import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/firebase';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StatusListComponent } from './status-list/status-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    RouterModule.forRoot([
      { path: '', component: PersonDetailsComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'status', component: StatusListComponent },
      { path: 'people/:personId', component: PersonDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    StatusListComponent,
    PersonDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule { }