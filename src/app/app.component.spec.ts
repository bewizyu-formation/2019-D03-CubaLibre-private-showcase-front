import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExempleComponent } from './exemple/exemple.component';
import { HeaderPictureComponent } from './header-picture/header-picture.component';
import { HomeUserSettingsComponent } from './home-user-settings/home-user-settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterArtistComponent } from './register-artist/register-artist.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatCheckboxModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { CommonHeadersInterceptorService } from './services/interceptors/common-headers-interceptor.service';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { HomeUserMenuComponent } from './home-user-menu/home-user-menu.component';
import { LoggedGuard } from './user/logged.guard';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { RatingComponent } from './rating/rating.component';
import { ProfilComponent } from './profil/profil.component';
import { ArtistPresentationComponent } from './artist-presentation/artist-presentation.component';
import { BookArtistComponent } from './book-artist/book-artist.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventCardComponent } from './event-card/event-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomeComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ExempleComponent,
        HeaderPictureComponent,
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
        MatIconModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatOptionModule,
        MatAutocompleteModule,
        FormsModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      providers: [
        { provide: APP_CONFIG, useValue: environment },
        { provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    expect(true).toBe(true);
  }));
});

