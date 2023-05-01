import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgOtpInputModule } from  'ng-otp-input';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import {ErrorInterceptor} from './_interceptors/error.interceptor';
import {DEFAULT_CURRENCY_CODE} from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllproductsComponent } from './allpages/allproducts/allproducts.component';
import { DetailsComponent } from './allpages/details/details.component';

import {RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FilterPipe } from './_pipes/filter.pipe';
import { RegisterComponent } from './auth/register/register.component';
import { OrganisationTypeDatailsComponent } from './auth/components/organisation-type-datails/organisation-type-datails.component';
import { WishlistComponent } from './allpages/wishlist/wishlist.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CartpageEcomComponent } from './allpages/cartpage-ecom/cartpage-ecom.component';
import { ExcploreDealsComponent } from './allpages/excplore-deals/excplore-deals.component';
import { FilterComponent } from './filter/filter.component';
import { MyorderComponent } from './allpages/myorder/myorder.component';
import { OrderTrackingComponent } from './allpages/order-tracking/order-tracking.component';
import { CheckoutComponent } from './allpages/checkout/checkout.component';
import { Details2Component } from './allpages/details2/details2.component';
import { TypepageComponent } from './allpages/typepage/typepage.component';
import { ViewprofileComponent } from './allpages/viewprofile/viewprofile.component';
import { EditprofileComponent } from './allpages/editprofile/editprofile.component';
import { SilverproductsComponent } from './allpages/silverproducts/silverproducts.component';
import { CountdownModule } from 'ngx-countdown';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
 import { NgxImageZoomModule } from 'ngx-image-zoom';
import { EditaddressComponent } from './allpages/editaddress/editaddress.component';
import { EditbankComponent } from './allpages/editbank/editbank.component';
import { AddaddressComponent } from './allpages/addaddress/addaddress.component';
import { AddbankComponent } from './allpages/addbank/addbank.component';
import { GiftcardsComponent } from './allpages/giftcards/giftcards.component';
import { MygiftcardComponent } from './allpages/mygiftcard/mygiftcard.component';
import { ClipboardModule } from 'ngx-clipboard';
import {NgxCopyPasteModule} from 'ngx-copypaste'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllproductsComponent,
    DetailsComponent,
    LoginComponent,
    
    FilterPipe,
         RegisterComponent,
         OrganisationTypeDatailsComponent,
         WishlistComponent,
         PageNotFoundComponent,
         CartpageEcomComponent,
         ExcploreDealsComponent,
         FilterComponent,
         MyorderComponent,
         OrderTrackingComponent,
         CheckoutComponent,
         Details2Component,
         TypepageComponent,
         ViewprofileComponent,
         EditprofileComponent,
         SilverproductsComponent,
        
         EditprofileComponent,
         ViewprofileComponent,
         EditaddressComponent,
         EditbankComponent,
         AddaddressComponent,
         AddbankComponent,
         GiftcardsComponent,
         MygiftcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    DropDownListModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    RouterModule,
    NgOtpInputModule,
    NgxSpinnerModule,
    CountdownModule,
    ShareButtonsModule,
  ShareIconsModule,
  NgxImageZoomModule,
  ClipboardModule,
  NgxCopyPasteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
