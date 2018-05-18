import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { FooterComponent } from './dashboard/footer/footer.component';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { VisiblePipe } from './_pipes/visible.pipe';
import { PortfolioService } from './_services/portfolio.service';
import { MainPipe } from './_pipes/main.pipe';
import { TypewriterModule, TypewriterService } from 'ng2-typewriter';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { AboutComponent } from './dashboard/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    HeaderComponent,
    PortfolioComponent,
    FooterComponent,
    VisiblePipe,
    MainPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TypewriterModule,
    ParallaxModule  
  ],
  providers: [PortfolioService, TypewriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
