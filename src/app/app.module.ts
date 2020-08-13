import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, PageRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    PageRoutes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
