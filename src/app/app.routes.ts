import { Routes } from "@angular/router";
import { PATH_WELCOME, PATH_HOME, PATH_LOGIN, PATH_REGISTER } from "./app.routes.constantes";
import { WelcomeComponent } from "./welcome/welcome.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const ROUTES: Routes = [
    { path: PATH_WELCOME, component: WelcomeComponent },
    { path: PATH_HOME, component: HomeComponent },
    { path: PATH_LOGIN, component: LoginComponent },
    { path: PATH_REGISTER, component: RegisterComponent }
]