import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { HeaderComponent } from './page/element/header/header.component';
import { FooterComponent } from './page/element/footer/footer.component';
import { NavigationComponent } from './page/element/navigation/navigation.component';
import { LoadjsDirective } from './loadjs.directive';
import { DynamicScriptLoaderService } from './dynamic-script-loader.service';
import { HttpClientModule } from '@angular/common/http';
import { WebserviceService } from '../app/services/webservice.service';
import { ShopComponent } from './page/shop/shop.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventemitterService } from '../app/services/eventemitter.service';
import { RegisterComponent } from './page/register/register.component';
import { ProductComponent } from './page/product/product.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { ModelComponent } from './page/model/model.component'

const appRoutes: Routes = [
  { path : '', component: HomeComponent, pathMatch: 'full' },
  { path: 'pages/:id', component:AboutComponent, pathMatch: 'full' },
  { path: 'shop' , component:ShopComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'product/:id', component:ProductComponent},
  { path: 'cart', component:CartComponent },
  { path: 'checkout', component:CheckoutComponent },
  { path: 'model', component:ModelComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LoadjsDirective,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [DynamicScriptLoaderService,EventemitterService,
    NgbModalConfig, NgbModal,
    WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
