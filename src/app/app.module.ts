import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { CommonHeadersInterceptorService } from './services/interceptors/common-headers-interceptor.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeUserSettingsComponent } from './home-user-settings/home-user-settings.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPictureComponent } from './header-picture/header-picture.component';
import { ExempleComponent } from './exemple/exemple.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { HomeUserMenuComponent } from './home-user-menu/home-user-menu.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { RatingComponent } from './rating/rating.component';
import { RegisterArtistComponent } from './register-artist/register-artist.component';
import { ProfilComponent } from './profil/profil.component';
import { BookArtistComponent } from './book-artist/book-artist.component';
import { ArtistPresentationComponent } from './artist-presentation/artist-presentation.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventCardComponent } from './event-card/event-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExempleComponent,
    HeaderPictureComponent,
    HomeComponent,
    HomeUserSettingsComponent,
    ArtistCardComponent,
    HomeUserMenuComponent,
    ArtistPageComponent,
    RatingComponent,
    RegisterArtistComponent,
    ProfilComponent,
    ArtistPresentationComponent,
    BookArtistComponent,
    EventPageComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule ,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
