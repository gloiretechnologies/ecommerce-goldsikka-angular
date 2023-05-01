import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component'; 
import { FooterComponent } from './layouts/footer/footer.component'; 

import { HomeComponent } from './home/home.component'; 
import { AllproductsComponent } from './allpages/allproducts/allproducts.component';

import { DetailsComponent } from './allpages/details/details.component';
import { AuthenticationService } from './_services/authentication/authentication.service';
import { AuthGuard } from './_services/authentication/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { WishlistComponent } from './allpages/wishlist/wishlist.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CartpageEcomComponent } from './allpages/cartpage-ecom/cartpage-ecom.component';
import { ExcploreDealsComponent } from './allpages/excplore-deals/excplore-deals.component';
import { MyorderComponent } from './allpages/myorder/myorder.component';
import { OrderTrackingComponent } from './allpages/order-tracking/order-tracking.component';
import { CheckoutComponent } from './allpages/checkout/checkout.component';
import { Details2Component } from './allpages/details2/details2.component';
import { TypepageComponent } from './allpages/typepage/typepage.component';
import { ViewprofileComponent } from './allpages/viewprofile/viewprofile.component';
import { EditprofileComponent } from './allpages/editprofile/editprofile.component';
import { SilverproductsComponent } from './allpages/silverproducts/silverproducts.component';
import { EditaddressComponent } from './allpages/editaddress/editaddress.component';
import { EditbankComponent } from './allpages/editbank/editbank.component';
import { AddaddressComponent } from './allpages/addaddress/addaddress.component';
import { AddbankComponent } from './allpages/addbank/addbank.component';
import { GiftcardsComponent } from './allpages/giftcards/giftcards.component';
import { MygiftcardComponent } from './allpages/mygiftcard/mygiftcard.component';
const routes: Routes = [

                    { path: '', component: HomeComponent,},
                    { path: 'home', component: HomeComponent,},
                    { path: 'cart', component: CartpageEcomComponent ,canActivate:[AuthGuard]},
                    { path: 'wishlist', component: WishlistComponent ,canActivate:[AuthGuard]},
                    { path: 'myorder', component: MyorderComponent },
                    { path: 'ordertracking/:id', component: OrderTrackingComponent },


                    { path: 'login', component: LoginComponent},
                    { path: 'register', component: RegisterComponent },
                    { path: 'viewprofile', component: ViewprofileComponent ,canActivate:[AuthGuard]},
                    { path: 'editprofile/:id', component: EditprofileComponent ,canActivate:[AuthGuard]},
                    { path: 'editaddress/:id', component: EditaddressComponent ,canActivate:[AuthGuard]},
                    { path: 'editbank/:id', component: EditbankComponent ,canActivate:[AuthGuard]},
                    { path: 'address/add', component: AddaddressComponent ,canActivate:[AuthGuard]},
                    { path: 'bank/add', component: AddbankComponent ,canActivate:[AuthGuard]},

                    
                                     {
                path: 'Ecommerce',
  
                children: [
                    
                    { path: 'allproducts/:id', component: AllproductsComponent },
                    { path: 'details/:id', component: DetailsComponent },
                    { path: 'detailss/:id', component: Details2Component },
                    { path: 'explore-deals', component: ExcploreDealsComponent },
                    { path: 'checkout', component: CheckoutComponent },
                    { path: 'myorders', component: MyorderComponent },
                    { path: 'ordertrecking', component: OrderTrackingComponent },
                    { path: 'type/gold', component: TypepageComponent },
                    { path: 'type/silver', component: SilverproductsComponent },
                    { path: 'type/Giftcards', component: GiftcardsComponent},
                    { path: 'mygiftcards', component: MygiftcardComponent}, 
                ]    
            },
            { path: '**', component: PageNotFoundComponent }

];

@NgModule({
   imports: [RouterModule.forRoot(routes, {  preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
