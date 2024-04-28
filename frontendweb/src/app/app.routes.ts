import { Routes } from '@angular/router';
import {LandingComponent} from "./components/pages/landing/landing.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {RegisterComponent} from "./components/pages/register/register.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {ForgotPasswordComponent} from "./components/pages/forgot-password/forgot-password.component";
import {AdminPageComponent} from "./components/pages/admin-page/admin-page.component";
import {ProductDetailsComponent} from "./components/pages/product-details/product-details.component";
import {FavoriteProductsComponent} from "./components/pages/favorite-products/favorite-products.component";
import {AboutusComponent} from "./components/pages/aboutus/aboutus.component";
import {ManageAccountComponent} from "./components/pages/manage-account/manage-account.component";
import {GalleryComponent} from "./components/pages/gallery/gallery.component";
import {CheckoutComponent} from "./components/pages/checkout/checkout.component";
import {AddProductComponent} from "./components/pages/admin-page/components/add-product/add-product.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forgotpass',
    component: ForgotPasswordComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'product_details',
    component: ProductDetailsComponent
  },
  {
    path: 'favourites',
    component: FavoriteProductsComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'manage',
    component: ManageAccountComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'add_product',
    component: AddProductComponent
  }
];

