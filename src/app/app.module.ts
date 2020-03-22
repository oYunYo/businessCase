import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { EditVoitureComponent } from './components/edit-voiture/edit-voiture.component';
import { AddVoitureComponent } from './components/add-voiture/add-voiture.component';
import { SlideDeRechercheComponent } from './components/slide-de-recherche/slide-de-recherche.component';
import { SmallFooterComponent } from './components/small-footer/small-footer.component';
import { BigFooterComponent } from './components/big-footer/big-footer.component';
import { VoitureComponent } from './components/voiture/voiture.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseModule } from 'ngx-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EditVoitureComponent,
    AddVoitureComponent,
    SlideDeRechercheComponent,
    SmallFooterComponent,
    BigFooterComponent,
    VoitureComponent,
    ColorPickerComponent,
    ModalComponent,
    TabsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
