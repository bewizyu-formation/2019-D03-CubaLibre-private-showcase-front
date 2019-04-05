/*import { async, TestBed } from '@angular/core/testing';
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
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule
} from '@angular/material';
import { CommonHeadersInterceptorService } from './services/interceptors/common-headers-interceptor.service';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';

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
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'private-showcase'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('private-showcase');
  }));
});
*/