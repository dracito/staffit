import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/firebase';

import { AppComponent } from './app.component';
import { Grid } from 'ag-grid-community';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StatusListComponent } from './status-list/status-list.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonDetailsComponent } from './people/person-details/person-details.component';
import { FirestoreDataCreationService } from './services/firestore-data-creation.service';

const routes: Routes = [
  { path: '', component: StatusListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'status', component: StatusListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:personId', component: PersonDetailsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    Grid,    
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
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
    PeopleListComponent,
    PersonDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: SETTINGS, useValue: {} }, CartService, FirestoreDataCreationService]
})
export class AppModule { }
