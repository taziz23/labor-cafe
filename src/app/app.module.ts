import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { InstagramComponent } from './components/layouts/instagram/instagram.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { ReservationModalComponent } from './components/layouts/reservation-modal/reservation-modal.component';
import { VideoComponent } from './components/layouts/video/video.component';
import { BookTableComponent } from './components/layouts/book-table/book-table.component';
import { ChefsComponent } from './components/layouts/chefs/chefs.component';
import { CtaComponent } from './components/layouts/cta/cta.component';
import { GalleryComponent } from './components/layouts/gallery/gallery.component';
import { FeaturesComponent } from './components/layouts/features/features.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { FeedbackComponent } from './components/layouts/feedback/feedback.component';
import { PartnerComponent } from './components/layouts/partner/partner.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { StunningThingsComponent } from './components/layouts/stunning-things/stunning-things.component';
import { OfferComponent } from './components/layouts/offer/offer.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { HeaderFourComponent } from './components/layouts/header-four/header-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    HeaderOneComponent,
    HomeTwoComponent,
    InstagramComponent,
    AboutComponent,
    ReservationModalComponent,
    VideoComponent,
    BookTableComponent,
    ChefsComponent,
    CtaComponent,
    GalleryComponent,
    FeaturesComponent,
    ContactComponent,
    FeedbackComponent,
    PartnerComponent,
    BlogDetailsComponent,
    BlogComponent,
    StunningThingsComponent,
    OfferComponent,
    HeaderTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
